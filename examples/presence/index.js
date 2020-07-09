import colors from 'colors/safe';

const Sipcentric = require('@sipcentric/pbx-client');
const CONFIG = require('./config');

const myCustomerId = CONFIG.CUSTOMER_ID;

// Enter your API credentials here
const sipcentric = new Sipcentric({
  username: CONFIG.USERNAME,
  password: CONFIG.PASSWORD,
});

// We'll use this to store the state of each extension
const stateMap = new Map();

// We'll use this to store the labels for each extension
const extensionLabelsMap = new Map();

// Map the states to colours from the 'colors' library
const colorsMap = new Map([
  ['AVAILABLE', 'green'],
  ['BUSY', 'red'],
]);

const subscribeToAll = async () => {
  const customer = await sipcentric.customers.get(myCustomerId);
  const phones = await customer.phones.get();

  await Promise.all(
    phones.items.map(async (phone) => {
      const [ua, sip] = await Promise.all([
        sipcentric.getUA({ extensionId: phone.id }),
        phone.sip.get(),
      ]);

      extensionLabelsMap.set(
        sip.username,
        `${phone.shortNumber} - ${phone.name}`,
      );

      // Set up event listener for userStateChanged event
      ua.on('userStateChanged', (extension, newState) => {
        stateMap.set(extension, newState);
      });

      // Subscribe to user once ua has connected
      ua.on('connected', () => {
        ua.subscribeToUser(sip.username);
      });

      // Start user agent connection
      ua.start();
    }),
  );
};

// We'll use this to flash the bullet for ringing extensions
let isFlashing = false;

// A quick and simple renderer
const renderOutput = () => {
  const logLines = Array.from(stateMap.entries())
    .map(([extension, state]) => {
      const bullet = '⬤';
      let colorName;

      if (state === 'RINGING') {
        // Flash between AVAILABLE and BUSY colours
        colorName = isFlashing
          ? colorsMap.get('AVAILABLE')
          : colorsMap.get('BUSY');
      } else {
        // Default to grey, if unknown
        colorName = colorsMap.get(state) || 'grey';
      }

      const colorFunc = colors[colorName];
      // Default label to 'Unknown'
      const details = extensionLabelsMap.get(extension) || 'Unknown';

      return `${colorFunc(bullet)} ${details}`;
    })
    .join('\n');

  console.clear(); // Clear the console
  console.log(logLines); // Log everything out
};

try {
  // Set up our subscriptions
  subscribeToAll();

  // Start our render loop
  const renderLoop = setInterval(() => {
    // Toggle the flash state
    isFlashing = !isFlashing;
    renderOutput();
  }, 500);
} catch (err) {
  console.error('Something went wrong: ', err);
}
