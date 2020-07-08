// @ts-ignore
import parse from 'xml-parser';
import { WebRTCConfig, CallOptions, IWebRTC } from '../interfaces';

const npmPackage = require('../../../package.json');

const VERSION = npmPackage.version;

const instantiate = (
  passedConfig: WebRTCConfig,
  modules: { [k: string]: any },
): IWebRTC => {
  const {
    JsSIP, // Main JsSIP module
    DigestAuthentication,
    RequestSender,
    SIPMessage,
    Transactions,
  } = modules;

  class WebRTC extends JsSIP.UA implements IWebRTC {
    constructor(options: WebRTCConfig) {
      const baseConfig = {
        domain: 'sip.sipcentric.com',
        register: false,
        registerExpires: 300,
        userAgent: `sipcentric-pbx-client/v${VERSION}`,
        wsServer: 'wss://sipws.sipcentric.com',
      };

      const config = {
        ...baseConfig,
        ...options,
        uri: '',
      };

      // Check for required options
      const requiredOptions = ['username', 'password'];

      requiredOptions.forEach((optionName) => {
        if (!(config as any)[optionName]) {
          throw new Error(`WebRTC requires '${optionName}' option`);
        }
      });

      config.uri = `sip:${config.username}@${config.domain}`;

      super({
        authorization_user: config.username,
        password: config.password,
        register: config.register,
        register_expires: config.registerExpires,
        session_timers: false,
        sockets: [new JsSIP.WebSocketInterface(config.wsServer)],
        uri: `${options.username}@${config.domain}`,
        user_agent: config.userAgent,
        instance_id: config.instanceId,
      });

      this.pbxDomain = config.domain;

      this.subscriptions = new Map();
      this.subscribeExpires = 600;
      this.cseq = 0;

      // Rename receiveRequest to _receiveRequest
      this._receiveRequest = this.receiveRequest;

      this.receiveRequest = (request: any) => {
        // Define a new receiveRequest handler that checks for NOTIFYs
        // If the request is a NOTIFY it handles it,
        // otherwise it passes the request off to _receiveRequest
        if (
          request.method === JsSIP.C.NOTIFY &&
          request.headers.Event[0].raw === 'dialog'
        ) {
          // JsSIP transaction check
          if (Transactions.checkTransaction(this, request)) return;

          // This is horrible but required
          // eslint-disable-next-line no-new
          new Transactions.NonInviteServerTransaction(
            this,
            this.transport,
            request,
          );

          try {
            const subscriptionStateHeader =
              request.headers['Subscription-State'][0].raw;
            if (subscriptionStateHeader) {
              const subscriptionState = subscriptionStateHeader.split(';')[0];

              this.updateSubscriptionState(request);

              if (subscriptionState === 'terminated') return;
            }
          } catch (err) {
            // console.debug('err: ', err);
          }

          if (!request.body) return;

          // Parse the xml request body
          const parsedBody = parse(request.body);

          try {
            // Grab the state and version from the parsed body
            const state = parsedBody.root.children[0].children[0].content;
            const version = parseInt(parsedBody.root.attributes.version, 10);

            // Find the subscription
            const subscription = this.getSubscription(request);

            if (subscription) {
              if (version > subscription.version) {
                this.updateVersion(request, version);
                this.emitUserStateChanged(subscription.toUser, state);
              }
              // Reply OK
              request.reply(200);
            }
          } catch (err) {
            console.debug('Error parsing xml: ', request);
          }
        } else {
          // Pass the request off to the built-in receiveRequest
          // eslint-disable-next-line consistent-return
          return this._receiveRequest(request);
        }
      };

      this.dialogStateMap = new Map([
        ['terminated', 'AVAILABLE'],
        ['early', 'RINGING'],
        ['confirmed', 'BUSY'],
        ['trying', 'BUSY'],
      ]);

      // Resubscribe checker
      setInterval(() => {
        this.subscriptions.forEach((subscription: any) => {
          const { expires, subscriptionState } = subscription;
          if (subscriptionState === 'expired') {
            this.subscribeToUser(subscription.toUser, subscription);
            return;
          }
          const resubscribeTime = 20000;
          const now = Date.now();
          const diff = expires - now;
          if (diff < resubscribeTime) {
            this.resubscribeToUser(subscription);
          }
        });
      }, 30000);
    }

    dial(target: string, options: CallOptions) {
      const baseOptions: CallOptions = {
        mediaConstraints: {
          audio: true,
          video: false,
        },
        rtcOfferConstraints: {
          offerToReceiveVideo: 0,
        },
      };

      const shallowMergedOptions = {
        ...baseOptions,
        ...options,
      };

      return this.call(target, shallowMergedOptions);
    }

    emitUserStateChanged(user: string, state: string) {
      const normalizedState = state.toLowerCase();

      // Get a more readable state
      const readableState =
        this.dialogStateMap.get(normalizedState) || 'UNKNOWN';

      this.emit('userStateChanged', user, readableState);
    }

    getSubscription(message: any) {
      return this.subscriptions.get(message.call_id);
    }

    updateVersion(request: any, version: any) {
      const subscription = this.getSubscription(request);
      if (subscription) {
        this.subscriptions.set(request.call_id, {
          ...subscription,
          version,
        });
      }
    }

    updateSubscriptionState(request: any) {
      if (!request.headers['Subscription-State']) return;

      const subscriptionStateHeader =
        request.headers['Subscription-State'][0].raw;
      const splitHeaders: string[] = subscriptionStateHeader.split(';');

      const state = splitHeaders[0];
      const secToExpire = splitHeaders
        .find((x) => x.includes('expires'))
        .split('=')[1];

      const msToExpire = Number(secToExpire) * 1000;

      const subscription = this.getSubscription(request);
      if (subscription) {
        clearTimeout(subscription.expireTimeout);

        this.subscriptions.set(request.call_id, {
          ...subscription,
          subscriptionState: state,
          expires:
            secToExpire === undefined
              ? subscription.expires
              : Date.now() + msToExpire,
          expireTimeout: setTimeout(() => {
            this.expireSubscription(request);
          }, msToExpire),
        });
      }
    }

    storeSubscription(response: any) {
      const callId = response.call_id;
      const msToExpire = response.headers.Expires[0].raw * 1000;
      const expires = Date.now() + msToExpire;
      const subscription = this.getSubscription(response);
      const version = subscription ? subscription.version : -1;
      const rawContact = response.headers.Contact[0].raw;
      const contact = rawContact.replace(/[<,>]/g, '');
      if (
        subscription &&
        Object.prototype.hasOwnProperty.call(subscription, 'expireTimeout')
      ) {
        clearTimeout(subscription.expireTimeout);
      }

      this.subscriptions.set(callId, {
        callId,
        version,
        expires,
        contact,
        toUser: response.to.uri.user,
        toDomain: response.to.uri.host,
        cseq: response.cseq,
        toTag: response.to_tag,
        fromTag: response.from_tag,
        expireTimeout: setTimeout(() => {
          this.expireSubscription(response);
        }, msToExpire),
      });
    }

    expireSubscription(response: any) {
      const callId = response.call_id;
      const subscription = this.getSubscription(response);
      if (subscription) {
        this.subscriptions.set(callId, {
          ...subscription,
          subscriptionState: 'expired',
        });
      }
    }

    clearSubscriptions() {
      this.subscriptions.forEach((subscription: any) => {
        const { expireTimeout } = subscription;
        clearTimeout(expireTimeout);
      });
      this.subscriptions.clear();
    }

    subscribeToUser(
      user: string,
      replacesSubscription: any,
      extraHeaders?: string[],
    ) {
      let uri = `sip:${user}@${this.pbxDomain}`;
      uri = JsSIP.URI.parse(uri);

      const callId = replacesSubscription
        ? replacesSubscription.callId
        : JsSIP.Utils.createRandomToken(22);

      const fromTag = replacesSubscription ? replacesSubscription.fromTag : '';

      const options = {
        to_uri: uri,
        call_id: callId,
        from_tag: fromTag,
        cseq: 1,
      };

      this.sendSubscribeRequest(uri, options, extraHeaders);
    }

    resubscribeToUser(subscription: any) {
      let uri = `sip:${subscription.toUser}@${subscription.toDomain}`;
      uri = JsSIP.URI.parse(uri);

      const options = {
        to_uri: uri,
        call_id: subscription.callId,
        cseq: subscription.cseq + 1,
        from_tag: subscription.fromTag,
        to_tag: subscription.toTag,
      };
      this.sendSubscribeRequest(subscription.contact, options);
    }

    sendSubscribeRequest(ruri: string, options: any, headers?: string[]) {
      const extraHeaders = [
        `Contact: ${this.contact.toString()}; expires=${this.subscribeExpires}`,
        `Expires: ${this.subscribeExpires}`,
        'Event: dialog',
        ...(headers || []),
      ];

      const request = new SIPMessage.OutgoingRequest(
        JsSIP.C.SUBSCRIBE,
        ruri,
        this,
        options,
        extraHeaders,
      );

      const eventHandlers = {
        request,
        onReceiveResponse: (response: any) => {
          this.subscribeResponseHandler(response);
        },
        onRequestTimeout: () => {
          // console.log('webRTC.sendSubscribeRequest.onRequestTimeout');
        },
        onTransportError: () => {
          // console.log('webRTC.sendSubscribeRequest.onTransportError');
        },
        onAuthenticated: () => {
          // console.log('webRTC.sendSubscribeRequest.onAuthenticated');
        },
      };

      const requestSender = new RequestSender(this, request, eventHandlers);

      requestSender.send();
    }

    subscribeResponseHandler(response: any) {
      let challenge;
      let authorizationHeaderName;
      const statusCode = response.status_code;

      /*
       * Authentication
       * Authenticate once. _challenged_ flag used to avoid infinite authentications.
       */
      if (
        [401, 407].includes(statusCode) &&
        (this.configuration.password !== null ||
          this.configuration.ha1 !== null)
      ) {
        // Get and parse the appropriate WWW-Authenticate or Proxy-Authenticate header.
        if (response.statusCode === 401) {
          challenge = response.parseHeader('www-authenticate');
          authorizationHeaderName = 'authorization';
        } else {
          challenge = response.parseHeader('proxy-authenticate');
          authorizationHeaderName = 'proxy-authorization';
        }

        // Verify it seems a valid challenge.
        if (!challenge) {
          console.error(
            `${response.statusCode} with wrong or missing challenge, cannot authenticate`,
          );
          return;
        }

        if (!this.challenged || (!this.staled && challenge.stale === true)) {
          if (!this.auth) {
            this.auth = new DigestAuthentication({
              username: this.configuration.authorization_user,
              password: this.configuration.password,
              realm: this.configuration.realm,
              ha1: this.configuration.ha1,
            });
          }

          // Verify that the challenge is really valid.
          if (!this.auth.authenticate(this.request, challenge)) {
            return;
          }
          this.challenged = true;

          // Update ha1 and realm in the this.
          this.set('realm', this.auth.get('realm'));
          this.set('ha1', this.auth.get('ha1'));

          if (challenge.stale) {
            this.staled = true;
          }

          this.request = this.request.clone();

          this.request.cseq = response.cseq + 1;
          this.request.setHeader(`cseq ${this.request.cseq} ${this.method}`);

          this.request.setHeader(authorizationHeaderName, this.auth.toString());
          this.send();
        }
      } else if (statusCode.toString().match(/20\d/)) {
        this.storeSubscription(response);
      }
    }
  }

  return new WebRTC(passedConfig);
};

export default instantiate;
