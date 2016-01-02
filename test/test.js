'use strict';

const assert = require('assert');
const nock = require('nock');
const Nimvelo = require('../dist/nimvelo')
const VERSION = require('../package.json').version;

describe('Nimvelo', () => {

  describe('Constructor', () => {

    describe('new Nimvelo();', () => {

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
      }

      it('creates new instance', () => {
        const client = new Nimvelo();
        assert(client instanceof Nimvelo);
      });

      it('has default options', () => {
        const client = new Nimvelo();
        assert.equal(
          Object.keys(defaults).length,
          Object.keys(client.options).length
        );
        assert.deepEqual(
          Object.keys(defaults),
          Object.keys(client.options)
        )
      });

      it('accepts and overrides options', () => {
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
        }

        const client = new Nimvelo(options);

        assert(client.options.hasOwnProperty('newOption'));
        assert.equal(client.options.newOption, options.newOption);

        assert.equal(client.options.password, options.password);

        assert.equal(
          client.options.requestOptions.headers.Authorization,
          options.requestOptions.headers.Authorization
        );
      });

      it('has pre-configured _request object', () => {
        const client = new Nimvelo({
          requestOptions: {
            headers: {
              foo: 'bar'
            }
          }
        });

        assert(client.hasOwnProperty('request'));

        nock('http://node.nimvelo').get('/').reply(200);
        client.request.get('http://node.nimvelo', (error, response) => {
          var headers = response.request.headers;

          assert(headers.hasOwnProperty('foo'));
          assert(headers.foo, 'bar');

          assert.equal(headers['User-Agent'], 'node-nimvelo', + VERSION);
        });

      });

    });

  });

  describe('Prototypes', () => {

    describe('prototype._buildUrl();', () => {

      let client;

      before(() => {
        client = new Nimvelo()
      });

      it('method exists', () => {
        assert.equal(typeof client._buildUrl, 'function');
      });

      it('builds url', () => {

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

    describe('prototype._pathForType();', () => {

      let client;

      before(() => {
        client = new Nimvelo()
      });

      it('method exists', () => {
        assert.equal(typeof client._pathForType, 'function');
      });

      it('returns correct path', () => {

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

    describe('prototype._objectFromItem();', () => {

      let client;
      let item;

      before(() => {
        client = new Nimvelo();
        item = {};
      });

      it('method exists', () => {
        assert.equal(typeof client._objectFromItem, 'function');
      });

      it('returns correct object', () => {

        assert.equal(
          client._objectFromItem(item),
          false
        );

        item.type = 'customer';
        assert.equal(
          client._objectFromItem(item).type,
          'customer'
        );

      });

    });

  });

});
