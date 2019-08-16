# Sipcentric PBX Client

A Node.js client for interacting with the Sipcentric PBX.


## Contents

- [Key features](#key-features)
- [Getting started](#getting-started)
- [Interacting with the REST API](#interacting-with-the-rest-api)
  - [Promises and callbacks](#promises-and-callbacks)
  - [List customers](#list-customers)
  - [Fetch a specific customer](#fetch-a-specific-customer)
  - [Fetch a customer's phonebook](#fetch-a-customer's-phonebook)


## Key features

- Implements all of the Sipcentric REST API endpoints to make interacting with the API simple.
- Wraps [JsSIP](https://github.com/versatica/JsSIP) to allow you to easily make and receive calls through the Sipcentric PBX using WebRTC and WebSockets.
- Works in Node.js and in the browser (making/receiving calls only works in the browser).


## Getting started

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


## Interacting with the REST API

The REST API is accessed through the authenticated instance of the Sipcentric class.

```js
const Sipcentric = require('@sipcentric/pbx-client');

const sipcentric = new Sipcentric({
  username: 'myusername',
  password: 'mypassword',
});

// The API can now be accessed using the `sipcentric` variable
```


### Promises and callbacks

All of the examples in this README will use Promises and async/await, however this library also supports callbacks. To use callbacks, simply pass a callback as the final parameter.

```js
// Using promises with async/await
try {
  const customers = await sipcentric.customers.get();
  doStuffWith(customers);
} catch (err) {
  handleErr(err);
}

// Using promises with .then()
sipcentric.customers.get()
  .then((customers) => {
    doStuffWith(customers);
  })
  .catch((err) => {
    handleErr(err);
  });

// Using callbacks
sipcentric.customers.get((err, customers) => {
  if (err) {
    handleErr(err);
    return;
  }

  doStuffWith(customers);
});
```


### List customers

To fetch a list of customers that your user has access to, you can do as follows.

```js
const Sipcentric = require('@sipcentric/pbx-client');

(async () => {
  const sipcentric = new Sipcentric({
    username: 'myusername',
    password: 'mypassword',
  });

  const customerList = await sipcentric.customers.get();

  const customers = customerList.items;
  console.log(customers);
  // [{ type: 'customer', id: '1234', company: 'Some Great Company', ...}, {}, {}, ...]
})();
```

Here, `.get()` will return a promise which resolves to a `CustomerList` object. The list of customers returned from the API can be accessed through the `.items` property of the `CustomerList`.


### Fetch a specific customer

If you already know the ID of the customer you'd like to fetch, you can specify that ID when calling `.get()`.

```js
const Sipcentric = require('@sipcentric/pbx-client');

(async () => {
  const sipcentric = new Sipcentric({
    username: 'myusername',
    password: 'mypassword',
  });

  const customer = await sipcentric.customers.get('5678');
  console.log(customer);
  // { type: 'customer', id: '5678', company: 'Another Great Company', postcode: 'BA0 9ER', ...}

  console.log(customer.email);
  // support@greatcompany.io
})();
```

In this case, `.get()`'s returned promise will resolve to an individual `Customer` object, rather than a `CustomerList`, meaning you can access the properties of the customer returned from the API directly on the `Customer` object.


### Fetch a customer's phonebook

Once you've got a `Customer` object, you can use that to access specific endpoints relating to that customer. For example, if you wanted to fetch a customer's phone book you would do as follows.

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
  // [{ type: 'phonebookentry', id: '359', name: 'Joe Bloggs' ...}, {}, {}, ...]
})();
```


























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
  password: 'mypassword',
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
