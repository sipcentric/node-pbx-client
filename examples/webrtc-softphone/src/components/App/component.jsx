import React from 'react';
import Sipcentric from '@sipcentric/pbx-client';

import styles from './styles.module.scss';

/**
 * This example illustrates how to get a softphone working using the
 * Sipcentric PBX Client. Everything you need is contained within this
 * single component.
 *
 * !!! IMPORTANT !!!
 * =================
 *
 * Make sure to fill in your username and password when instantiating
 * Sipcentric in componentDidMount().
 */

class App extends React.Component {

  constructor(props) {
    super(props);

    this.localAudioRef = React.createRef();
    this.remoteAudioRef = React.createRef();

    this.state = {
      inputValue: '',
      ua: null,
      session: null,
      onHold: false,
      confirmed: false,
      registered: false,
      log: [],
    }
  }

  // Log to the console and add to log state array
  log(str) {
    console.log(str);
    this.setState({
      log: [
        ...this.state.log,
        str,
      ],
    });
  }

  async componentDidMount() {
    // Instantiate Sipcentric with your credentials
    const sipcentric = new Sipcentric({
      username: 'REPLACE_THIS_WITH_YOUR_SIPCENTRIC_USERNAME',
      password: 'REPLACE_THIS_WITH_YOUR_SIPCENTRIC_PASSWORD',
    });

    // Create a user agent
    const ua = await sipcentric.getUA({
      // Make sure to register so you can receive incoming calls
      register: true,
      // Bind the local and remote audio elements
      audio: {
        local: this.localAudioRef.current,
        remote: this.remoteAudioRef.current,
      },
    });

    // Let up some event handlers
    // Learn more about user agent events at:
    // https://jssip.net/documentation/3.3.x/api/ua/#section_events

    ua.on('registered', () => {
      // Once the extension's registered we can receive incoming calls
      this.log('phone registered');
      this.setState({
        registered: true,
      });
    });

    ua.on('unregistered', (e) => {
      // If the extension becomes unregistered then log the reason
      this.log(`phone unregistered: ${e.cause}`);
      this.setState({
        registered: false,
      });
    });

    ua.on('registrationFailed', (e) => {
      // If the extension fails to register then log the reason
      this.log(`phone registration failed: ${e.cause}`);
      this.setState({
        registered: false,
      });
    });

    ua.on('connected', () => {
      // The extension establishes the transport connection before registering
      this.log('phone connected');
      this.setState({
        ua,
      });
    });

    ua.on('disconnected', () => {
      this.log('phone disconnected');
    });

    ua.on('newRTCSession', (call) => {
      // newRTCSession is fired for both incoming and outgoing calls
      if (call.originator === 'remote') {
        // If it's an incoming call
        this.log('new incoming call');

        // Bind the session handlers
        this.bindSessionHandlers(call.session);

        // Let's answer the call immediately
        call.session.answer();

        // Bind the remote audio AFTER answering the call
        this.bindRemoteAudio(call.session);

        // Store the session for later use
        this.setState({
          session: call.session,
        });
      } else {
        // We don't need to do anything here for outgoing calls
        this.log('new outgoing call');
      }
    });

    // Start the user agent, which connects and registers
    ua.start();
  }

  // Clear the session from the state
  clearSession() {
    this.setState({
      session: null,
      onHold: false,
      confirmed: false,
    });
  }

  // Initiate a call
  call() {
    const {
      inputValue,
      ua,
    } = this.state;

    // Dial the inputted number
    const session = ua.dial(inputValue);

    // Bind the session handlers
    this.bindSessionHandlers(session);

    // Bind the remote audio
    this.bindRemoteAudio(session);

    // Store the session for later use
    this.setState({
      session,
    });
  }

  // Bind the remote audio
  bindRemoteAudio(session) {
    // Listen for the 'addstream' event
    session.connection.addEventListener('addstream', (e) => {
      // Bind the stream to the remote <audio> element
      this.remoteAudioRef.current.srcObject = e.stream;
      // Make sure the stream is playing
      this.remoteAudioRef.current.play();
    });
  }

  // Bind session handlers
  bindSessionHandlers(session) {
    // Bind some handlers to some useful events
    // Learn more about session events at:
    // https://jssip.net/documentation/3.3.x/api/session/#section_events

    session.on('progress', () => {
      this.log('call is in progress')
    });

    session.on('failed', (e) => {
      // If the call fails, log the reason and clear the session
      this.log(`call failed with cause: ${e.cause}`);
      this.clearSession();
    });

    session.on('ended', (e) => {
      // If the call ends, log the reason and clear the session
      this.log(`call ended with cause: ${e.cause}`);
      this.clearSession();
    });

    session.on('confirmed', (...args) => {
      this.log('call confirmed');

      this.setState({
        confirmed: true,
      });
    });

    session.on('hold', () => {
      this.log('call is on hold');
      this.setState({
        onHold: true,
      })
    });

    session.on('unhold', () => {
      this.log('call is off hold');
      this.setState({
        onHold: false,
      })
    });

    session.on('connecting', () => {
      this.log('call connecting');
    });

    session.on('sending', () => {
      this.log('call sending');
    });

    session.on('accepted', () => {
      this.log('call accepted');
    });

    session.on('muted', () => {
      this.log('call muted');
    });

    session.on('unmuted', () => {
      this.log('call unmuted');
    });

    // If getUserMedia fails, check your browser's privacy settings
    session.on('getusermediafailed', (err) => {
      this.log(`getusermediafailed: ${err}`);
    });
  }

  // Hang up the current call
  hangUp() {
    const { session } = this.state;
    if (!session) {
      return;
    }

    session.terminate();
  }

  render() {
    return (
      <div
        className={styles.container}
      >
        {/* The local audio element */}
        <audio
          autoPlay={true}
          ref={this.localAudioRef}
          muted={true}
        />

        {/* The remote audio element */}
        <audio
          autoPlay={true}
          ref={this.remoteAudioRef}
        />
        <h1
          className={styles.heading}
        >
          Sipcentric Softphone
        </h1>
        <div
          className={styles.registrationContainer}
        >
          <div
            className={styles.registrationIndicator}
            style={{
              backgroundColor: this.state.registered ? 'limegreen' : 'red'
            }}
          />
          <span>
            {
              this.state.registered
                ? 'Registered'
                : 'Not Registered'
            }
          </span>
        </div>
        <input
          className={styles.input}
          value={this.state.inputValue}
          onChange={(e) => {
            this.setState({
              inputValue: e.target.value,
            });
          }}
        />
        <div
          className={styles.buttonContainer}
        >
          <button
            className={styles.button}
            onClick={() => {
              this.call();
            }}
            disabled={!this.state.inputValue || this.state.session}
          >
            Dial
          </button>

          <button
            className={styles.button}
            onClick={() => {
              this.hangUp();
            }}
            disabled={!this.state.session}
          >
            Hang up
          </button>

          <button
            className={styles.button}
            onClick={() => {
              if (this.state.onHold) {
                this.state.session.unhold();
              } else {
                this.state.session.hold();
              }
            }}
            disabled={!this.state.confirmed}
          >
            {
              this.state.onHold
                ? 'Unhold'
                : 'Hold'
            }
          </button>

        </div>
        <div
          className={styles.log}
        >
          <h2>Log</h2>
          {
            this.state.log.map((str, i) => (
              <div
                key={i}
              >
                {str}
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}

export default App;
