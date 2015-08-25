# Nimvelo Node.js Client

Node.js client for the [Nimvelo/Sipcentric API](https://developer.sipcentric.com/)


## Installation

### Best method

```
npm install nimvelo
```

### Manual method

```
git clone git@github.com:Nimvelo/python-client.git
```

## Getting started

### Examples

#### Get account details

```
var Nimvelo = require('nimvelo');

var nimvelo = new Nimvelo({username: 'myusername', password: 'mypassword'});

nimvelo.customer(function(err, customer) {

  if (!err) {
    console.log(customer);
  }

});
```

#### Get phone book

```
var Nimvelo = require('nimvelo');

var nimvelo = new Nimvelo({username: 'myusername', password: 'mypassword'});

nimvelo.customer(function(err, customer) {

  if (!err) {

    customer.phonebook(function(err, phonebook) {

      if (!err) {
        console.log('phonebook')
      }

    });

  }

});
```
