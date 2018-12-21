const SIP = require('sip.js');
const parser = require('xml2json');

class PresenceWatcher {
  constructor(client) {
    this.client = client;

    this.dialogStateMap = new Map([
      ['terminated', 'AVAILABLE'],
      ['early', 'RINGING'],
      ['confirmed', 'BUSY'],
      ['trying', 'BUSY'],
    ]);
  }

  // eslint-disable-next-line class-methods-use-this
  _getDialogState(notification) {
    // Parse our xml body
    const xml = notification.request.body;
    const json = parser.toJson(xml, {
      object: true,
    });

    // We _should_ never need this
    if (!json['dialog-info'].dialog.state) {
      return 'Unknown';
    }

    // Sanitize the state
    const dialogState = json['dialog-info'].dialog.state.toLowerCase();

    // Get a more readable state
    const state = this.dialogStateMap.get(dialogState);

    // If we didn't find the state in our map, return the raw state
    return state || json['dialog-info'].dialog.state;
  }

  async _getExtensionCredentials(extensionId) {
    const customer = await this.client.customers.get(this.customerId);
    const phone = await customer.phones.get(extensionId);

    // Get the extension's SIP credentials
    const {
      username,
      password,
    } = await phone.sip.get();

    return {
      username,
      password,
    };
  }

  async subscribe(options = {}) {
    const {
      customerId,
      domain = 'sip.sipcentric.com',
      wsServers = ['wss://sipws.sipcentric.com'],
      targets = [],
      onStateChange = () => {},
    } = options;

    if (!customerId) {
      throw new Error('Property \'customerId\' is required.');
    }

    this.customerId = customerId;

    // If we've got no targets, we don't have to do anything
    if (targets.length === 0) {
      return [];
    }

    let {
      username,
      password,
    } = options;

    if (!username || !password) {
      // Pick the first extension to monitor from, and get it's credentials
      ({ // Parens required as we've already declared the destructure vars
        username,
        password,
      } = await this._getExtensionCredentials(targets[0]));
    }

    // Create our UA
    const ua = new SIP.UA({
      uri: `${username}@${domain}`,
      transportOptions: {
        wsServers,
      },
      authorizationUser: username,
      password,
      register: false,
      log: {
        builtinEnabled: false,
      },
    });

    // Iterate through the targets, returning a subscription for each one
    const subscriptions = targets.map((target) => {
      // Make sure we've got a 6 digit username
      const paddedTarget = target.padStart(6, '0');

      // Subscribe
      const subscription = ua.subscribe(`${paddedTarget}@${domain}`, 'dialog');

      // Set up our notify callback
      subscription.on('notify', (notification) => {
        // Get a more readable state
        const state = this._getDialogState(notification);

        // Call the given callback with the target and new state
        onStateChange(target, state);
      });

      return subscription;
    });

    return subscriptions;
  }
}

module.exports = PresenceWatcher;
