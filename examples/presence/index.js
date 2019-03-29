const colors = require('colors/safe');

const Nimvelo = require('../../lib');
const CONFIG = require('./config');

const myCustomerId = 5;

// Enter your API credentials here
const nimvelo = new Nimvelo({
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
  const customer = await nimvelo.customers.get(myCustomerId);
  const phones = await customer.phones.get();

  // Build the label for each extension
  phones.items.forEach(x => {
    extensionLabelsMap.set(x.id, `${x.shortNumber} - ${x.name}`);
  });

  // Get a list of extension IDs to monitor
  const extensionIds = phones.items.map(x => x.id);

  await nimvelo.presenceWatcher.subscribe({
    customerId: myCustomerId,
    targets: extensionIds,
    onStateChange: (extension, newState) => {
      // Update the extension's state
      stateMap.set(extension, newState);
    },
  });
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
        colorName = isFlashing ? colorsMap.get('AVAILABLE') : colorsMap.get('BUSY');
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

  console.log('\033[2J'); // Clear the console
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
