/* global describe, it, before, beforeEach */
/* eslint func-names:0 */

'use strict';

const assert = require('assert');
const nock = require('nock');
const qs = require('querystring');

const Nimvelo = require('../dist/nimvelo');
const PhonebookentryList = require('../dist/phonebookentryList');
const Phonebookentry = require('../dist/phonebookentry');
const mockPhonebookentry = require('./mock/phonebookentry');

describe('PhonebookentryList', function() {

  describe('Constructor', function() {

    describe('new PhonebookentryList();', function() {

      let client;
      let phonebookentryList;

      beforeEach(function() {
        client = new Nimvelo();
        phonebookentryList = new PhonebookentryList(client);
      });

      it('creates new instance', function() {
        assert(phonebookentryList instanceof PhonebookentryList);
      });

      it('has correct type', function() {
        assert.equal(phonebookentryList.type, 'phonebookentryList');
      });

      it('has correct item type', function() {
        assert.equal(phonebookentryList.itemType, 'phonebookentry');
      });

      it('has access to client', function() {
        assert(phonebookentryList.client instanceof Nimvelo);
      });

      it('cannot have it\'s type overridden on initialization', function() {

        const phonebookentryListWrongType = new PhonebookentryList(client, { type: 'INCORRECT_TYPE' });

        assert.equal(
          phonebookentryListWrongType.type,
          'phonebookentryList'
        );

      });

    });

  });

  describe('Inherited prototypes', function() {

    describe('prototype.list();', function() {

      let client;
      let phonebookentryList;

      let params;

      beforeEach(function() {

        client = new Nimvelo();
        phonebookentryList = new PhonebookentryList(client);

        params = {
          createdAfter: '2016-01-01T00:00:00Z'
        };

      });

      it('method exists', function() {
        assert.equal(typeof phonebookentryList.list, 'function');
      });

      it('returns a promise by default', function() {
        assert(phonebookentryList.list() instanceof Promise);
      });

      it('doesn\'t return a promise if a callback is provided', function() {
        assert.notEqual(phonebookentryList.list(function() {}) instanceof Promise);
      });

      it('calls a callback, if provided', function(done) {

        nock('https://pbx.sipcentric.com/api/v1/customers/me')
        .get('/phonebook/')
        .query(true)
        .reply(200, mockPhonebookentry.listMultiple);

        phonebookentryList.list(function(err, data) {
          if (err) {
            done(err);
          } else if (data.items[0].name === mockPhonebookentry.listMultiple.items[0].name) {
            done();
          } else {
            done(new Error('Name name doesn\'t match'));
          }
        });

      });

      it('returns an object containing items and metadata', function(done) {

        nock('https://pbx.sipcentric.com/api/v1/customers/me')
        .get('/phonebook/')
        .query(true)
        .reply(200, mockPhonebookentry.listMultiple);

        phonebookentryList.list().then(function(data) {

          assert(data.hasOwnProperty('items'));

          assert(data.hasOwnProperty('meta'));

        }).then(done, done);

      });

      it('returns an object with an items property containing an array of Phonebookentry objects', function(done) {

        nock('https://pbx.sipcentric.com/api/v1/customers/me')
        .get('/phonebook/')
        .query(true)
        .reply(200, mockPhonebookentry.listMultiple);

        phonebookentryList.list().then(function(data) {

          assert(Array.isArray(data.items));
          assert(data.items[0] instanceof Phonebookentry);
          assert(data.items[1] instanceof Phonebookentry);

        }).then(done, done);

      });

      it('returns an object with a meta property containing metadata', function(done) {

        nock('https://pbx.sipcentric.com/api/v1/customers/me')
        .get('/phonebook/')
        .query(true)
        .reply(200, mockPhonebookentry.listMultiple);

        phonebookentryList.list().then(function(data) {

          assert(data.hasOwnProperty('meta'));

          assert(data.meta.hasOwnProperty('totalItems'));
          assert.equal(data.meta.totalItems, 3);

          assert(data.meta.hasOwnProperty('pageSize'));
          assert.equal(data.meta.pageSize, 20);

          assert(data.meta.hasOwnProperty('page'));
          assert.equal(data.meta.page, 1);

        }).then(done, done);

      });

      it('appends given query parameters to request URL', function(done) {

        nock('https://pbx.sipcentric.com/api/v1/customers/me')
        .get(`/phonebook/?${qs.stringify(params)}`)
        .reply(200, mockPhonebookentry.listSingle);

        phonebookentryList.list(params).then(function(data) {

          assert.equal(data.items.length, 1);

          assert.equal(data.meta.totalItems, 1);

        }).then(done, done);

      });

    });

    describe('prototype.find();', function() {

      let client;
      let phonebookentryList;

      let params;

      beforeEach(function() {

        client = new Nimvelo();
        phonebookentryList = new PhonebookentryList(client);

      });

      it('method exists', function() {
        assert.equal(typeof phonebookentryList.find, 'function');
      });

      it('returns a promise by default', function() {
        assert(phonebookentryList.find() instanceof Promise);
      });

      it('doesn\'t return a promise if a callback is provided', function() {
        assert.notEqual(phonebookentryList.find(function() {}) instanceof Promise);
      });

      it('calls a callback, if provided', function(done) {

        nock('https://pbx.sipcentric.com/api/v1/customers/me')
        .get('/phonebook/')
        .query(true)
        .reply(200, mockPhonebookentry.listMultiple);

        phonebookentryList.find(function(err, data) {
          if (err) {
            done(err);
          } else if (data.items[0].name === mockPhonebookentry.listMultiple.items[0].name) {
            done();
          } else {
            done(new Error('Name name doesn\'t match'));
          }
        });

      });

      it('returns an object containing items and metadata if no id is provided', function(done) {

        nock('https://pbx.sipcentric.com/api/v1/customers/me')
        .get('/phonebook/')
        .query(true)
        .reply(200, mockPhonebookentry.listMultiple);

        phonebookentryList.find().then(function(data) {

          assert(data.hasOwnProperty('items'));

          assert(data.hasOwnProperty('meta'));

        }).then(done, done);

      });

      it('returns an object with an items property containing an array of Phonebookentry objects if no id is provided', function(done) {

        nock('https://pbx.sipcentric.com/api/v1/customers/me')
        .get('/phonebook/')
        .query(true)
        .reply(200, mockPhonebookentry.listMultiple);

        phonebookentryList.find().then(function(data) {

          assert(Array.isArray(data.items));
          assert(data.items[0] instanceof Phonebookentry);
          assert(data.items[1] instanceof Phonebookentry);

        }).then(done, done);

      });

      it('returns an object with a meta property containing metadata if no id is provided', function(done) {

        nock('https://pbx.sipcentric.com/api/v1/customers/me')
        .get('/phonebook/')
        .query(true)
        .reply(200, mockPhonebookentry.listMultiple);

        phonebookentryList.find().then(function(data) {

          assert(data.hasOwnProperty('meta'));

          assert(data.meta.hasOwnProperty('totalItems'));
          assert.equal(data.meta.totalItems, 3);

          assert(data.meta.hasOwnProperty('pageSize'));
          assert.equal(data.meta.pageSize, 20);

          assert(data.meta.hasOwnProperty('page'));
          assert.equal(data.meta.page, 1);

        }).then(done, done);

      });

      it('returns a single object if id is provided', function(done) {

        nock('https://pbx.sipcentric.com/api/v1/customers/me')
        .get('/phonebook/2/')
        .query(true)
        .reply(200, mockPhonebookentry.singleObject);

        phonebookentryList.find(2).then(function(data) {

          assert(!Array.isArray(data));

          assert(!data.hasOwnProperty('items'));

          assert(!data.hasOwnProperty('meta'));

          assert.equal(data.name, mockPhonebookentry.singleObject.name);

        }).then(done, done);

      });

      it('appends given query parameters to request URL', function(done) {

        nock('https://pbx.sipcentric.com/api/v1/customers/me')
        .get(`/phonebook/${qs.stringify(params)}`)
        .query(params)
        .reply(200, mockPhonebookentry.listSingle);

        phonebookentryList.find(params).then(function(data) {

          assert.equal(data.items.length, 1);

          assert.equal(data.meta.totalItems, 1);

        }).then(done, done);

      });

    });

  });

});
