# Sipcentric Node.js Client

Node.js client for the [Sipcentric API](https://developer.sipcentric.com/).

## Usage

```
npm install @sipcentric/pbx-client
```

```js
const Sipcentric = require('@sipcentric/pbx-client');

const sipcentric = new Sipcentric({
  username: 'myusername',
  password: 'mypassword',
});

// ...
```

## Examples

The techniques shown in these examples work in the same way across the majority of resources. Refer to the [API Documentation](https://developer.sipcentric.com/). for more information on those specific resources.

The examples below use Promises with async/await, however the library also supports callbacks. To use callbacks, simply pass a callback as the final parameter.

```js
// Using promises with async/await
const customers = await sipcentric.customers.get();
doStuffWith(customers);

// Using promises with .then()
sipcentric.customers.get().then((customers) => {
  doStuffWith(customers);
});

// Using callbacks
sipcentric.customers.get((err, customers) => {
  doStuffWith(customers);
});
```

There are further examples in the `examples/` directory. To try them, just clone the project, run an install in the project root, then again in the directory of the example you want to run. Finally, run `npm start` in the example directory and the example will run.

### Interacting with the PBX REST API

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

### Interacting with the Streaming API

#### Subscribe to incoming call events

```js
const Sipcentric = require('@sipcentric/pbx-client');

const sipcentric = new Sipcentric({
  username: 'myusername',
  password: 'mypassword'
});

sipcentric.stream.subscribe('incomingcall', (call) => {
  console.log(call);
});
````

### Interacting with the PBX using WebRTC

#### Monitor presence of an extension

```js
const Sipcentric = require('@sipcentric/pbx-client');

(async () => {
  const sipcentric = new Sipcentric({
    username: 'myusername',
    password: 'mypassword',
  });

  const ua = await sipcentric.getUA();

  ua.on('userStateChanged', (extension, newState) => {
    console.log(extension); // 012345 or 567890
    console.log(newState); // AVAILABLE, BUSY, or RINGING
  });

  ua.on('connected', () => {
    ua.subscribeToUser('012345');
    ua.subscribeToUser('567890');
  });

  ua.start();
})();
```

#### Make a call

```js
const Sipcentric = require('@sipcentric/pbx-client');

(async () => {
  const sipcentric = new Sipcentric({
    username: 'myusername',
    password: 'mypassword',
  });

  const ua = await sipcentric.getUA();

  ua.on('connected', () => {
    // *52 is an echo test, which is useful for testing
    const numberToCall = '*52';
    ua.dial(numberToCall);
  });

  ua.start();
})();
```
