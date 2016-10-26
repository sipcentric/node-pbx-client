# Nimvelo Node.js Client

Node.js client for the [Nimvelo/Sipcentric API](https://developer.nimvelo.com/)


## Installation

### Best method

```
npm install nimvelo
```

### Manual method

Firstly, clone the repo:

```
git clone git@github.com:Nimvelo/node-client.git
```

You'll then need to compile the code using babel:

```
gulp babel
```

Then just require Nimvelo:

```js
var Nimvelo = require('./dist/nimvelo.js');
```

## Getting started

### Examples

All of the following examples use callbacks, however ES6 promises are also supported. To use promises, just don't pass a callback and a promise will be returned instead.

#### Get account details

```js
var Nimvelo = require('nimvelo');

var nimvelo = new Nimvelo({username: 'myusername', password: 'mypassword'});

nimvelo.customers.get(function(err, customer) {

  if (err) {
    // Handle errors here
  }

  console.log(customer);

});
```

#### Get phone book

```js
var Nimvelo = require('nimvelo');

var nimvelo = new Nimvelo({username: 'myusername', password: 'mypassword'});

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
var Nimvelo = require('nimvelo');

var nimvelo = new Nimvelo({username: 'myusername', password: 'mypassword'});

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
var Nimvelo = require('nimvelo');

var nimvelo = new Nimvelo({username: 'myusername', password: 'mypassword'});

nimvelo.customers.get(function(err, customer) {

  if (err) {
    // Handle errors here
  }

  var phonebookentry = {
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
var Nimvelo = require('nimvelo');

var nimvelo = new Nimvelo({username: 'myusername', password: 'mypassword'});

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
var Nimvelo = require('nimvelo');

var nimvelo = new Nimvelo({username: 'myusername', password: 'mypassword'});

var stream = nimvelo.stream();

stream.subscribe('incomingcall', function(call) {

  console.log(call);

});

```
