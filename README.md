# Nimvelo Node.js Client

Node.js client for the [Nimvelo/Sipcentric API](https://developer.sipcentric.com/)


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

#### Get account details

```js
var Nimvelo = require('nimvelo');

var nimvelo = new Nimvelo({username: 'myusername', password: 'mypassword'});

nimvelo.customer(function(err, customer) {

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

nimvelo.customer(function(err, customer) {

  if (err) {
    // Handle errors here
  }

  customer.phonebook(function(err, phonebook) {

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

nimvelo.customer(function(err, customer) {

  if (err) {
    // Handle errors here
  }

  customer.phonebook('1234', function(err, phonebookEntry) {

    if (err) {
      // Handle errors here
    }

    phonebookEntry.update({name: 'Nimvelo'}).save(function(err, updatedEntry) {
      console.log(updatedEntry);
    });

  });

});
```

#### Create phone book entry

```js
var Nimvelo = require('nimvelo');

var nimvelo = new Nimvelo({username: 'myusername', password: 'mypassword'});

nimvelo.customer(function(err, customer) {

  if (err) {
    // Handle errors here
  }

  var phonebookentry = {
    name: 'Nimvelo',
    phoneNumber: '03301200030',
    email: 'hello@nimvelo.com'
  };

  customer.create('phonebookentry', phonebookentry).save(function(err, newEntry) {
    console.log(newEntry);
  });

});
```

#### Delete phone book entry

```js
var Nimvelo = require('nimvelo');

var nimvelo = new Nimvelo({username: 'myusername', password: 'mypassword'});

nimvelo.customer(function(err, customer) {

  if (err) {
    // Handle errors here
  }

  customer.phonebook('1234', function(err, phonebookEntry) {

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
