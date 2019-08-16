# Sipcentric PBX Client

A Node.js client for interacting with the Sipcentric PBX.


## Contents

- [Key features](#key-features)
- [Getting started](#getting-started)
- [Examples](#examples)
- [Interacting with the REST API](#interacting-with-the-rest-api)
  - [Promises and callbacks](#promises-and-callbacks)
  - [List customers](#list-customers)
  - [Fetch a specific customer](#fetch-a-specific-customer)
  - [Fetch a customer's phonebook](#fetch-a-customer's-phonebook)
  - [Fetch a single phone book entry](#fetch-a-single-phone-book-entry)
  - [Update a phone book entry](#update-a-phone-book-entry)
  - [Create a phone book entry](#create-a-phone-book-entry)
  - [Delete a phone book entry](#delete-a-phone-book-entry)
  - [Interacting with other resources](#interacting-with-other-resources)
- [Interacting with the Streaming API](#interacting-with-the-streaming-api)
  - [Subscribe to stream events](#subscribe-to-stream-events)
- [Interacting with the PBX using WebRTC](#interacting-with-the-pbx-using-webrtc)
  - [Differences between Sipcentric UA and JsSIP UA](#differences-between-sipcentric-ua-and-jssip-ua)
  - [Monitor the presence of an extension](#monitor-the-presence-of-an-extension)
  - [Register an extension](#register-an-extension)
  - [Make a call](#make-a-call)
  - [Receive a call](#receive-a-call)


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


## Examples

There are examples of how to use this library in the `examples/` directory. To try them, just clone the project, run an install in the project root, then again in the directory of the example you want to run. Finally, run `npm start` in the example directory and the example will run.


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


### List a customer's phone book

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


### Fetch a single phone book entry

You can fetch a single phone book entry in the same way you fetch a single customer; just pass an ID to the `.get()` function.

```js
const Sipcentric = require('@sipcentric/pbx-client');

(async () => {
  const sipcentric = new Sipcentric({
    username: 'myusername',
    password: 'mypassword',
  });

  const customerId = 1234;

  const customer = await sipcentric.customers.get(customerId);
  const phonebookEntry = await customer.phonebook.get('359');

  console.log(phonebookEntry);
  // { type: 'phonebookentry', id: '359', name: 'Joe Bloggs', phoneNumber: '01234567890', ...}
})();
```


### Update a phone book entry

To update a phone book entry, just fetch that entry, make your desired changes, then call `.save()` on the entry. `.save()` will return a promise which resolves to the updated phone book entry.


```js
const Sipcentric = require('@sipcentric/pbx-client');

(async () => {
  const sipcentric = new Sipcentric({
    username: 'myusername',
    password: 'mypassword',
  });

  const customerId = 1234;

  const customer = await sipcentric.customers.get(customerId);
  const phonebookEntry = await customer.phonebookEntry.get('359');

  phonebookEntry.name = 'Joseph Bloggs';

  const savedEntry = await phonebookEntry.save();

  console.log(savedEntry);
  // { type: 'phonebookentry', id: '359', name: 'Joseph Bloggs', phoneNumber: '01234567890', ...}
})();
```


### Create a phone book entry

To create a phone book entry, create an object with all of the desired properties, pass that object to the `.create()` method, then call `.save()`.

```js
const Sipcentric = require('@sipcentric/pbx-client');

(async () => {
  const sipcentric = new Sipcentric({
    username: 'myusername',
    password: 'mypassword',
  });

  const customerId = 1234;

  const customer = await sipcentric.customers.get(customerId);

  const phonebookEntry = {
    name: 'Sipcentric',
    phoneNumber: '03301200030',
    email: 'hello@sipcentric.com',
    speedDial: 19,
  };

  const createdEntry = await customer.phonebook
    .create(phonebookEntry)
    .save();

  console.log(createdEntry);
  // { type: 'phonebookentry', id: '360', name: 'Sipcentric', phoneNumber: '03301200030', ...}
})();
```

### Delete a phone book entry

To delete a phone book entry, first fetch the entry, then call `delete()` on it. `.delete()` returns a promise which doesn't resolve to anything.

```js
const Sipcentric = require('@sipcentric/pbx-client');

(async () => {
  const sipcentric = new Sipcentric({
    username: 'myusername',
    password: 'mypassword',
  });

  const customerId = 1234;

  const customer = await sipcentric.customers.get(customerId);
  const phonebookEntry = await customer.phonebook.get('360');

  await phonebookEntry.delete();
})();
```


### Interacting with other resources

The examples above show how to fetch customers and phonebookentrys. **The same methods are available across all resources.**

- `.get(id?: string)` - List a resource or, if an ID is passed, fetch an individual representation.
- `.create(obj: {})` - Create a representation from an object. Must then call `.save()` on the returned representation to persist it to the API.
- `.save()` - Persist a representation to the API.
- `.delete()` - Delete a representation from the API.

You can find out a bit more about the available resources in the [API Documentation](https://developer.sipcentric.com/). The resources that this client supports are listed below. We endeavour to keep this library up-to-date with the current state of the API, however if there is a resource listed in the API docs that isn't available here, please open an issue and it will be added as a matter of priority.

- sipcentric
  - .customers
    - .availablebundles
    - .billing
      - .invoices
      - .estimate
      - .paymentmethods
    - .calls
    - .callbundles
    - .creditstatus
    - .endpoints
    - .groups
    - .ivrs
    - .linkedusers
    - .mailboxes
    - .music
    - .outgoingcallerids
    - .phones
      - .sip
        -.registrations
      - .forwardingrules
    - .phonebook
    - .phonenumbers
      - .routingrules
    - .prompts
    - .preferences
    - .queues
      - .entries
      - .memberships
      - .status
    - .recordings
    - .smsmessages
    - .sounds
    - .timeintervals
    - .virtuals
  - .getUA()
  - .stream


### Interacting with the Streaming API

The streaming API uses long-polling HTTP requests to keep a connection open for events to be pushed down.

There are a variety of events which are exposed through the stream. For more information on those events see the [API Documentation](https://developer.sipcentric.com/).


#### Subscribe to stream events

```js
const Sipcentric = require('@sipcentric/pbx-client');

const sipcentric = new Sipcentric({
  username: 'myusername',
  password: 'mypassword',
});

// We'll use the 'incomingcall' event, in this example
sipcentric.stream.subscribe('incomingcall', (call) => {
  console.log(call);
});
```

### Interacting with the PBX using WebRTC

The `getUA()` method accepts a single optional parameter, which is a config object, and returns a (slightly modified) [JsSIP User Agent](https://jssip.net/documentation/3.3.x/api/ua).


```ts
interface Config {
  // Whether the User Agent should register (required for receiving calls)
  register?: boolean; // Default - false
  // The instanceId (uuid) to send with the registration.
  instanceId?: string; // Defaults to generated uuid
  // The customer to use.
  customerId?: string; // Defaults to first available customer.
  // The extension to use.
  extensionId?: string; // Defaults to linkedUser's default extension
  // The SIP username of the extension to use
  username?: string; // Defaults to default extension's username
  // The SIP password of the extension to use
  password?: string; // Defaults to default extension's password
}

const config: Config = {};

const ua = await sipcentric.getUA(config);
```

#### Differences between Sipcentric UA and JsSIP UA

The `getUA()` method **returns a promise** which resolves to an instance of a Sipcentric UA, which itself extends a JsSIP UA. It's worth noting that `getUA()` **does not accept a final callback parameter, it only ever returns a promise**.

There are a few minor differences between the Sipcentric UA and the JsSIP UA, which are outlined below. Other than these listed differences, the two are identical and you can refer to [JsSIP's documentation](https://jssip.net/documentation/3.3.x/api/) for more information on interacting with the UA and with RTCSessions.

**Differences**
- JsSIP's `.call(target, options)` method has been replaced with `.dial(target,options)`. You can pass the same options to `.dial()` as you would `.call()`, but `.dial()` sets a few useful defaults for you.
- Two new methods have been added.
  - `.subscribeToUser(user)` subscribes to a user's presence and fires a `userStateChanged` event when a user's state changes (see below for more information).
  - `.clearSubscriptions()` clears all subscriptions
- A `userStateChanged` event has been added, which is emitted when a user's presence state changes. Two parameters are also passed when this event is emitted. The first is the user who's state has changed, the second is the new state. See [Monitor the presence of an extension](#monitor-the-presence-of-an-extension) for more information and an example.


#### Create a UA and connect

Creating a UA is simple. By default, the `getUA()` method will do a lot of the heavy lifting for you. It will fetch the first customer you have access to, fetch your linkeduser on that customer, fetch that linkeduser's default extension, then use that extension's SIP credentials to connect. This means that you don't need to pass any parameters to it to get up and running.

If you'd like to connect using a different extension, simply pass an options object to `getUA(options)`, including the `extensionId` and `customerId` properties on that options object. See [Interacting with the PBX using WebRTC](#interacting-with-the-pbx-using-webrtc) for more information on the options parameter.

In this example, we'll let `getUA()` take care of everything for us.

```js
const Sipcentric = require('@sipcentric/pbx-client');

(async () => {
  const sipcentric = new Sipcentric({
    username: 'myusername',
    password: 'mypassword',
  });

  // Create an instance of a user agent
  const ua = await sipcentric.getUA();

  ua.on('connected', () => {
    // Do things that rely on a connection here
  });

  // Start and connect the user agent
  ua.start();
})();
```

#### Monitor the presence of an extension

After subscribing to an extension using `.subscribeToUser(user)`, events will be fired every time that extension's state changes. The `userStateChanged` event also passes two parameters when it's emitted; the user who's state has changed (useful if you've subscribed to multiple users), and the user's new state.

- AVAILABLE - The user isn't on a call
- BUSY - The user is connected to a call
- RINGING - The user's phone is currently ringing

```js
const Sipcentric = require('@sipcentric/pbx-client');

(async () => {
  const sipcentric = new Sipcentric({
    username: 'myusername',
    password: 'mypassword',
  });

  // Create an instance of a user agent
  const ua = await sipcentric.getUA();

  // Set up our event listener
  ua.on('userStateChanged', (extension, newState) => {
    console.log(extension); // Could be either 012345 or 567890
    console.log(newState); // AVAILABLE, BUSY, or RINGING
  });

  // Wait until the ua has connected before subscribing
  ua.on('connected', () => {
    // Subscribe to some extensions by passing their SIP username
    ua.subscribeToUser('012345');
    ua.subscribeToUser('567890');
  });

  // Start and connect the user agent
  ua.start();
})();
```


#### Register an extension

If you want to receive calls, you'll need to make sure that you're user agent is registered. This library handles re-registering for you, so all you need to do is pass `{ register: true }` to `getUA()`.

```js
const Sipcentric = require('@sipcentric/pbx-client');

(async () => {
  const sipcentric = new Sipcentric({
    username: 'myusername',
    password: 'mypassword',
  });

  // Create an instance of a user agent, passing { register: true }
  const ua = await sipcentric.getUA({
    register: true,
  });

  ua.on('registered', () => {
    // Do things that rely on a registration here
  });

  ua.on('registrationFailed', (response, cause) => {
    // Log out any errors
    console.log('registration failed', cause);
  });

  // Start, connect, and register the user agent
  ua.start();
})();
```


#### Make a call

To make a call, you'll need access to browser APIs, so you'll likely need to use a bundler (Webpack, rollup, etc) to bundle this library to run in a browser.

Once you've got the library running in a browser, you'll be able to call the `.dial()` method on the ua.

// TODO Add information on binding audio elements

```js
const Sipcentric = require('@sipcentric/pbx-client');

(async () => {
  const sipcentric = new Sipcentric({
    username: 'myusername',
    password: 'mypassword',
  });

  // Create an instance of a user agent
  const ua = await sipcentric.getUA();

  // For the sake of a simple example, we'll dial a number as soon as we connect
  ua.on('connected', () => {
    // *52 is an echo test, which is useful for development
    ua.dial('*52'); // Change this to the number you'd like to call
  });

  // Start and connect the user agent
  ua.start();
})();
```


#### Receive a call

a

```js

```
