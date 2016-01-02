/* global describe, it, before, beforeEach */
/* eslint func-names:0 */

'use strict';

const assert = require('assert');
const nock = require('nock');

const Nimvelo = require('../dist/nimvelo');
const Call = require('../dist/call');
const Customer = require('../dist/customer');
const Recording = require('../dist/recording');

const VERSION = require('../package.json').version;

describe('Nimvelo', function() {

  describe('Constructor', function() {

    describe('new Nimvelo();', function() {

      const defaults = {
        username: null,
        password: null,
        customer: 'me',
        restBase: 'https://pbx.sipcentric.com/api/v1/customers/',
        streamBase: 'https://pbx.sipcentric.com/api/v1/stream',
        json: true,
        requestOptions: {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': null
          }
        }
      };

      it('creates new instance', function() {
        const client = new Nimvelo();
        assert(client instanceof Nimvelo);
      });

      it('has default options', function() {
        const client = new Nimvelo();
        assert.equal(
          Object.keys(defaults).length,
          Object.keys(client.options).length
        );
        assert.deepEqual(
          Object.keys(defaults),
          Object.keys(client.options)
        );
      });

      it('accepts and overrides options', function() {
        const options = {
          username: 'TEST_USERNAME',
          password: 'TEST_PASSWORD',
          customer: 5,
          newOption: 'TEST_OPTION',
          requestOptions: {
            headers: {
              Authorization: 'Basic TEST_AUTH'
            }
          }
        };

        const client = new Nimvelo(options);

        assert(client.options.hasOwnProperty('newOption'));
        assert.equal(client.options.newOption, options.newOption);

        assert.equal(client.options.password, options.password);

        assert.equal(
          client.options.requestOptions.headers.Authorization,
          options.requestOptions.headers.Authorization
        );
      });

      it('has pre-configured _request object', function() {
        const client = new Nimvelo({
          requestOptions: {
            headers: {
              foo: 'bar'
            }
          }
        });

        assert(client.hasOwnProperty('request'));

        nock('http://node.nimvelo').get('/').reply(200);
        client.request.get('http://node.nimvelo', function (error, response) {
          const headers = response.request.headers;

          assert(headers.hasOwnProperty('foo'));
          assert(headers.foo, 'bar');

          assert.equal(headers['User-Agent'], 'node-nimvelo', + VERSION);
        });

      });

    });

  });

  describe('Prototypes', function() {

    describe('prototype._buildUrl();', function() {

      let client;

      beforeEach(function() {
        client = new Nimvelo();
      });

      it('method exists', function() {
        assert.equal(typeof client._buildUrl, 'function');
      });

      it('builds url', function() {

        assert.equal(
          client._buildUrl('rest', 'customers'),
          client.options.restBase
        );

        assert.equal(
          client._buildUrl('rest', 'customer'),
          client.options.restBase + 'me/'
        );

        assert.equal(
          client._buildUrl('rest', 'customer', 5),
          client.options.restBase + '5/'
        );

        assert.equal(
          client._buildUrl('rest', 'phonebookentry'),
          client.options.restBase + 'me/phonebook/'
        );

        assert.equal(
          client._buildUrl('rest', 'phonebookentry', 5),
          client.options.restBase + 'me/phonebook/5/'
        );

      });

    });

    describe('prototype._pathForType();', function() {

      let client;

      beforeEach(function() {
        client = new Nimvelo();
      });

      it('method exists', function() {
        assert.equal(typeof client._pathForType, 'function');
      });

      it('returns correct path', function() {

        assert.equal(
          client._pathForType('customers'),
          ''
        );

        assert.equal(
          client._pathForType('CUSTOMER'),
          ''
        );

        assert.equal(
          client._pathForType('phonebookentry'),
          client.options.customer + '/phonebook'
        );

        assert.equal(
          client._pathForType('TEST_TYPE'),
          client.options.customer + '/test_types'
        );

      });

    });

    describe('prototype._objectFromItem();', function() {

      let client;

      beforeEach(function() {
        client = new Nimvelo();
      });

      it('method exists', function() {
        assert.equal(typeof client._objectFromItem, 'function');
      });

      it('returns correct object', function() {

        assert.equal(
          client._objectFromItem({}),
          false
        );

        assert(client._objectFromItem({ type: 'customer' }) instanceof Customer);

        assert(client._objectFromItem({ type: 'recording' }) instanceof Recording);

      });

    });

    describe('prototype._buildObjects();', function() {

      let client;
      let customerItem;
      let callItem;
      let customerItemsArray;
      let mixedItemsArray;

      beforeEach(function() {
        client = new Nimvelo();
        customerItem = { type: 'customer' };
        callItem = { type: 'call' };
        customerItemsArray = [customerItem, customerItem, customerItem, customerItem];
        mixedItemsArray = [customerItem, callItem, customerItem, callItem, customerItem];
      });

      it('method exists', function() {
        assert.equal(typeof client._buildObjects, 'function');
      });

      it('returns correct object', function() {

        assert(!Array.isArray(client._buildObjects(customerItem)));

        assert(client._buildObjects(customerItem) instanceof Customer);

        assert(client._buildObjects(callItem) instanceof Call);

      });

      it('returns correct array', function() {

        assert(Array.isArray(client._buildObjects(customerItemsArray)));

        assert.equal(
          client._buildObjects(customerItemsArray).length,
          4
        );

        assert(client._buildObjects(customerItemsArray)[2] instanceof Customer);

        assert.equal(
          client._buildObjects(mixedItemsArray).length,
          5
        );

        assert(client._buildObjects(mixedItemsArray)[2] instanceof Customer);

        assert(client._buildObjects(mixedItemsArray)[3] instanceof Call);

      });

    });

    describe('prototype._request();', function() {

      let client;
      let type;

      beforeEach(function() {
        client = new Nimvelo();
        type = 'customer';
      });

      it('method exists', function() {
        assert.equal(typeof client._request, 'function');
      });

      it('returns a promise by default', function() {

        assert(client._request('get', type) instanceof Promise);

      });

      it('doesn\'t return a promise if a callback is provided', function() {

        assert.notEqual(client._request('get', type, function() {}) instanceof Promise);

      });

      it('calls a callback, if provided', function(done) {

        nock('https://pbx.sipcentric.com/api/v1/customers/me')
        .get('/')
        .reply(200, {
          type: 'customer',
          company: 'TEST_COMPANY'
        });

        client._request('get', type, function(err, data) {
          if (err) {
            done(err);
          } else if (data.company === 'TEST_COMPANY') {
            done();
          } else {
            done(new Error('Company name doesn\'t match'));
          }
        });

      });

    });

    describe('prototype._getResource();', function() {

      let client;
      let type;

      beforeEach(function() {
        client = new Nimvelo();
        type = 'customer';
      });

      it('method exists', function() {
        assert.equal(typeof client._getResource, 'function');
      });

      it('returns a promise by default', function() {

        assert(client._getResource(type) instanceof Promise);

      });

      it('doesn\'t return a promise if a callback is provided', function() {

        assert.notEqual(client._getResource(type, function() {}) instanceof Promise);

      });

      it('calls a callback, if provided', function(done) {

        nock('https://pbx.sipcentric.com/api/v1/customers/me')
        .get('/')
        .reply(200, {
          type: 'customer',
          company: 'TEST_COMPANY'
        });

        client._getResource(type, function(err, data) {
          if (err) {
            done(err);
          } else if (data.company === 'TEST_COMPANY') {
            done();
          } else {
            done(new Error('Company name doesn\'t match'));
          }
        });

      });

    });

  });

});
