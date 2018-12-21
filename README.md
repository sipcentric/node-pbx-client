# Nimvelo Node.js Client

Node.js client for the [Nimvelo/Sipcentric API](https://developer.nimvelo.com/)


## Usage

```
npm install nimvelo
```

```js
const Nimvelo = require('nimvelo');

// ...
```

## Getting started

### Examples

Many of the following examples use callbacks, however ES6 promises are also supported. To use promises, just don't pass a callback and a promise will be returned instead.

There are further examples in the `examples/` directory. To try them, just clone the project, run an install in the project root, then again in the directory of the example you want to run. Finally, run `npm start` and the example will run.

#### Get account details

```js
const Nimvelo = require('nimvelo');

const nimvelo = new Nimvelo({username: 'myusername', password: 'mypassword'});

nimvelo.customers.get(function(err, customer) {

  if (err) {
    // Handle errors here
  }

  console.log(customer);

});
```

#### Get phone book

```js
const Nimvelo = require('nimvelo');

const nimvelo = new Nimvelo({username: 'myusername', password: 'mypassword'});

nimvelo.customers.get(function(err, customer) {

  if (err) {
    // Handle errors here
  }

  customer.phonebook.get(function(err, phonebook) {

    if (err) {
      // Handle errors here
    }

    console.log(phonebook);

  });

});
```

#### Update phone book entry

```js
const Nimvelo = require('nimvelo');

const nimvelo = new Nimvelo({username: 'myusername', password: 'mypassword'});

nimvelo.customers.get(function(err, customer) {

  if (err) {
    // Handle errors here
  }

  customer.phonebook.create('1234', function(err, phonebookEntry) {

    if (err) {
      // Handle errors here
    }

    phonebookEntry.name = 'Nimvelo';

    phonebookEntry.save(function(err, updatedEntry) {
      console.log(updatedEntry);
    });

  });

});
```

#### Create phone book entry

```js
const Nimvelo = require('nimvelo');

const nimvelo = new Nimvelo({username: 'myusername', password: 'mypassword'});

nimvelo.customers.get(function(err, customer) {

  if (err) {
    // Handle errors here
  }

  const phonebookentry = {
    name: 'Nimvelo',
    phoneNumber: '03301200030',
    email: 'hello@nimvelo.com'
  };

  customer.phonebook.create(phonebookentry).save(function(err, newEntry) {
    console.log(newEntry);
  });

});
```

#### Delete phone book entry

```js
const Nimvelo = require('nimvelo');

const nimvelo = new Nimvelo({username: 'myusername', password: 'mypassword'});

nimvelo.customers.get(function(err, customer) {

  if (err) {
    // Handle errors here
  }

  customer.phonebook.get('1234', function(err, phonebookEntry) {

    if (err) {
      // Handle errors here
    }

    phonebookEntry.delete(function(err) {

      if (err) {
        // Handle errors here
      }

      // Record deleted

    });

  });

});
```


#### Subscribe to incoming call events

```js
const Nimvelo = require('nimvelo');

const nimvelo = new Nimvelo({username: 'myusername', password: 'mypassword'});

nimvelo.stream.subscribe('incomingcall', function(call) {

  console.log(call);

});

```


#### Monitor presence of an extension

```js
const Nimvelo = require('nimvelo');

const nimvelo = new Nimvelo({
  username: 'myusername',
  password: 'mypassword',
});

const myCustomerId = 1; // Change this to your customer ID

// Returns an array of subscriptions
const subscriptions = await nimvelo.presenceWatcher.subscribe({
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
const Nimvelo = require('nimvelo');

const nimvelo = new Nimvelo({
  username: 'myusername',
  password: 'mypassword',
});

const subscribeToAll = async () => {
  const myCustomerId = 1; // Change this to your customer ID
  // Get your customer
  const customer = await nimvelo.customers.get(myCustomerId);
  // Get a list of all regular extensions
  const phones = await customer.phones.get();

  // Get the ids of each extension
  const extensionIds = phones.items.map(x => x.id);

  // Subscribe to each extension
  const subscriptions = await nimvelo.presenceWatcher.subscribe({
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

