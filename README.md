# Sipcentric Node.js Client

Node.js client for the [Sipcentric API](https://developer.sipcentric.com/).

## Usage

```
npm install @sipcentric/pbx-client
```

```js
const Sipcentric = require('@sipcentric/pbx-client');

// ...
```

## Getting started

### Examples

The techniques shown in these examples work in the same way across the majority of resources. Refer to the API documentation for more information on those specific resources.

The examples below use Promises with async/await, however the library also supports callbacks. To use callbacks, simply pass a callback as the final parameter.

```js
// Using async/await
const customers = await sipcentric.customers.get();
doStuffWith(customers);

// Using callbacks
sipcentric.customers.get((err, customers) => {
  doStuffWith(customers);
});
```

There are further examples in the `examples/` directory. To try them, just clone the project, run an install in the project root, then again in the directory of the example you want to run. Finally, run `npm start` and the example will run.

#### Get all customers a user has access to

```js
const Sipcentric = require('@sipcentric/pbx-client');

(async () => {
  const sipcentric = new Sipcentric({
    username: 'myusername',
    password: 'mypassword',
  });

  const customers = await sipcentric.customers.get();
  console.log(customers);
})();
```

#### Get a specific customer

```js
const Sipcentric = require('@sipcentric/pbx-client');

(async () => {
  const sipcentric = new Sipcentric({
    username: 'myusername',
    password: 'mypassword',
  });

  const customerId = 1234;

  const customer = await sipcentric.customers.get(customerId);
  console.log(customer);
})();
```

#### Get a customer's phone book

```js
const Sipcentric = require('@sipcentric/pbx-client');

(async () => {
  const sipcentric = new Sipcentric({
    username: 'myusername',
    password: 'mypassword',
  });

  const customerId = 1234;

  const customer = await sipcentric.customers.get(customerId);
  const phonebook = await customer.phonebook.get();

  console.log(phonebook);
})();
```

#### Create phone book entry

```js
const Sipcentric = require('@sipcentric/pbx-client');

(async () => {
  const sipcentric = new Sipcentric({
    username: 'myusername',
    password: 'mypassword',
  });

  const customerId = 1234;

  const customer = await sipcentric.customers.get(customerId);
  const phonebookentry = {
    name: 'Sipcentric',
    phoneNumber: '03301200030',
    email: 'hello@sipcentric.com',
  };

  const createdEntry = await customer.phonebook.create(phonebookentry).save();

  console.log(createdEntry);
})();
```

#### Update phone book entry

```js
const Sipcentric = require('@sipcentric/pbx-client');

(async () => {
  const sipcentric = new Sipcentric({
    username: 'myusername',
    password: 'mypassword',
  });

  const customerId = 1234;
  const phonebookentryId = 5678;

  const customer = await sipcentric.customers.get(customerId);
  const phonebookentry = await customer.phonebook.get(phonebookentryId);

  phonebookentry.name = 'Updated name';

  const savedEntry = await phonebookentry.save();

  console.log(savedEntry);
})();
```

#### Delete phone book entry

```js
const Sipcentric = require('@sipcentric/pbx-client');

(async () => {
  const sipcentric = new Sipcentric({
    username: 'myusername',
    password: 'mypassword',
  });

  const customerId = 1234;
  const phonebookentryId = 5678;

  const customer = await sipcentric.customers.get(customerId);
  const phonebookentry = await customer.phonebook.get(phonebookentryId);

  await phonebookentry.delete();
})();
```

const customer = await nimvelo.customers.get(customerId);
const phonebookentry = await customer.phonebook.get(phonebookentryId);

await phonebookentry.delete();
})();

````

#### Subscribe to incoming call events

```js
const Sipcentric = require('@sipcentric/pbx-client');

const sipcentric = new Sipcentric({
  username: 'myusername',
  password: 'mypassword'
});

sipcentric.stream.subscribe('incomingcall', function(call) {

nimvelo.stream.subscribe("incomingcall", function(call) {
  console.log(call);
});
````

#### Monitor presence of an extension

```js
const Sipcentric = require('@sipcentric/pbx-client');

const sipcentric = new Sipcentric({
  username: 'myusername',
  password: 'mypassword',
});

const myCustomerId = 1; // Change this to your customer ID

// Returns an array of subscriptions
const subscriptions = await sipcentric.presenceWatcher.subscribe({
  customerId: myCustomerId,
  targets: ['012345'], // The extensions you'd like to monitor
  onStateChange: (extension, newState) => {
    console.log(extension); // 012345
    console.log(newState); // AVAILABLE, BUSY, or RINGING
  },
});
```

#### Monitor presence of all extensions on an account

```js
const Sipcentric = require('@sipcentric/pbx-client');

const sipcentric = new Sipcentric({
  username: 'myusername',
  password: 'mypassword',
});

const subscribeToAll = async () => {
  const myCustomerId = 1; // Change this to your customer ID
  // Get your customer
  const customer = await sipcentric.customers.get(myCustomerId);
  // Get a list of all regular extensions
  const phones = await customer.phones.get();

  // Get the ids of each extension
  const extensionIds = phones.items.map((x) => x.id);

  // Subscribe to each extension
  const subscriptions = await sipcentric.presenceWatcher.subscribe({
    customerId: myCustomerId,
    targets: extensionIds,
    onStateChange: (extension, newState) => {
      console.log(extension);
      console.log(newState);
    },
  });
};

try {
  subscribeToAll();
} catch (err) {
  console.error('Error: ', err);
}
```
