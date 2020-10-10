import Sipcentric from "@sipcentric/pbx-client";

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

const state = {
  ua: null,
  session: null,
  onHold: false,
  confirmed: false,
  registered: false,
  log: [],
};

const localAudio = document.querySelector("#localAudio");
const remoteAudio = document.querySelector("#remoteAudio");
const logContainer = document.querySelector("#log");
const numberInput = document.querySelector("#numberInput");
const registrationIndicator = document.querySelector("#registrationIndicator");
const registrationSpan = document.querySelector("#registrationSpan");
const callButton = document.querySelector("#callButton");
const hangupButton = document.querySelector("#hangupButton");
const holdButton = document.querySelector("#holdButton");

const logLine = (line) => {
  console.log(line);
  const el = document.createElement("div");
  el.textContent = line;
  logContainer.appendChild(el);
};

// Clear the session from the state
const clearSession = () => {
  state.session = null;
  setOnHold(false);
  setConfirmed(false);
};

// Initiate a call
const call = () => {
  const { ua } = state;
  const inputValue = numberInput.value;

  // Dial the inputted number
  const session = ua.dial(inputValue);

  // Bind the session handlers
  bindSessionHandlers(session);

  // Bind the remote audio
  bindRemoteAudio(session);

  // Store the session for later use
  state.session = session;
};

// Bind the remote audio
const bindRemoteAudio = (session) => {
  // Listen for the 'addstream' event
  session.connection.addEventListener("addstream", (e) => {
    // Bind the stream to the remote <audio> element
    remoteAudio.srcObject = e.stream;
    // Make sure the stream is playing
    remoteAudio.play();
  });
};

// Bind session handlers
const bindSessionHandlers = (session) => {
  // Bind some handlers to some useful events
  // Learn more about session events at:
  // https://jssip.net/documentation/3.3.x/api/session/#section_events

  session.on("progress", () => {
    logLine("call is in progress");
  });

  session.on("failed", (e) => {
    // If the call fails, log the reason and clear the session
    logLine(`call failed with cause: ${e.cause}`);
    clearSession();
  });

  session.on("ended", (e) => {
    // If the call ends, log the reason and clear the session
    logLine(`call ended with cause: ${e.cause}`);
    clearSession();
  });

  session.on("confirmed", (...args) => {
    logLine("call confirmed");
    setConfirmed(true);
  });

  session.on("hold", () => {
    logLine("call is on hold");
    setOnHold(true);
  });

  session.on("unhold", () => {
    logLine("call is off hold");
    setOnHold(false);
  });

  session.on("connecting", () => {
    logLine("call connecting");
  });

  session.on("sending", () => {
    logLine("call sending");
  });

  session.on("accepted", () => {
    logLine("call accepted");
  });

  session.on("muted", () => {
    logLine("call muted");
  });

  session.on("unmuted", () => {
    logLine("call unmuted");
  });

  // If getUserMedia fails, check your browser's privacy settings
  session.on("getusermediafailed", (err) => {
    logLine(`getusermediafailed: ${err}`);
  });
};

// Hang up the current call
const hangUp = () => {
  const { session } = state;
  if (!session) {
    return;
  }

  session.terminate();
};

const setRegistered = (isRegistered) => {
  state.registered = isRegistered;
  //
  registrationIndicator.style.backgroundColor = isRegistered
    ? "limegreen"
    : "red";
  registrationSpan.textContent = isRegistered ? "Registered" : "Not Registered";
};

const setOnHold = (isOnHold) => {
  state.onHold = isOnHold;
  //
  holdButton.textContent = isOnHold ? "Unhold" : "Hold";
};

const setConfirmed = (isConfirmed) => {
  state.confirmed = isConfirmed;
  //
};

callButton.onclick = () => call();
hangupButton.onclick = () => hangUp();
holdButton.onclick = () => {
  if (state.onHold) {
    state.session.unhold();
  } else {
    state.session.hold();
  }
};

// Instantiate Sipcentric with your credentials
const sipcentric = new Sipcentric({
  username: "REPLACE_THIS_WITH_YOUR_SIPCENTRIC_USERNAME",
  password: "REPLACE_THIS_WITH_YOUR_SIPCENTRIC_PASSWORD",
});

// Create a user agent
(async () => {
  state.ua = await sipcentric.getUA({
    // Make sure to register so you can receive incoming calls
    register: true,
    audio: {
      local: localAudio,
      remote: remoteAudio,
    },
  });

  // Let up some event handlers
  // Learn more about user agent events at:
  // https://jssip.net/documentation/3.3.x/api/ua/#section_events

  state.ua.on("registered", () => {
    // Once the extension's registered we can receive incoming calls
    logLine("phone registered");
    setRegistered(true);
  });

  state.ua.on("unregistered", (e) => {
    // If the extension becomes unregistered then log the reason
    logLine(`phone unregistered: ${e.cause}`);
    setRegistered(false);
  });

  state.ua.on("registrationFailed", (e) => {
    // If the extension fails to register then log the reason
    logLine(`phone registration failed: ${e.cause}`);
    setRegistered(false);
  });

  state.ua.on("connected", () => {
    // The extension establishes the transport connection before registering
    logLine("phone connected");
  });

  state.ua.on("disconnected", () => {
    logLine("phone disconnected");
  });

  state.ua.on("newRTCSession", (call) => {
    // newRTCSession is fired for both incoming and outgoing calls
    if (call.originator === "remote") {
      // If it's an incoming call
      logLine("new incoming call");

      // Bind the session handlers
      bindSessionHandlers(call.session);

      // Let's answer the call immediately
      call.session.answer();

      // Bind the remote audio AFTER answering the call
      bindRemoteAudio(call.session);

      // Store the session for later use
      state.session = call.session;
    } else {
      // We don't need to do anything here for outgoing calls
      logLine("new outgoing call");
    }
  });

  // Start the user agent, which connects and registers
  state.ua.start();
})();
