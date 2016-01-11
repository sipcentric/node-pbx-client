/* global describe, it, before, beforeEach */
/* eslint func-names:0 */

'use strict';

const assert = require('assert');
const nock = require('nock');

const Nimvelo = require('../dist/nimvelo');

module.exports = function(testParams) {

  const objectType = testParams.objectType;
  const listEndpoint = testParams.listEndpoint;

  describe(objectType, function() {

    let NvObject;
    let mockData;
    let newObject;
    let unavailableMethods;

    before(function() {

      NvObject = require(`../dist/${objectType}`);
      mockData = require(`./mock/${objectType}`);
      newObject = (client, properties) => new NvObject(client, properties);
      unavailableMethods = newObject().unavailableMethods || [];

    });

    describe('Constructor', function() {

      describe(`new ${objectType}();`, function() {

        let client;
        let representationObject;

        beforeEach(function() {
          client = new Nimvelo();
          representationObject = newObject(client);
        });

        it('creates new instance', function() {
          assert(representationObject instanceof NvObject);
        });

        it('has correct type', function() {
          assert.equal(representationObject.type, objectType);
        });

        it('has access to client', function() {
          assert(representationObject.client instanceof Nimvelo);
        });

        it('accepts an object of properties and sets them on the initialized object ', function() {

          const properties = {
            testProperty1: 'test',
            testProperty2: 123,
            testProperty3: true,
            testProperty4: undefined,
          };

          const representationObjectWithProperties = newObject(client, properties);

          assert.equal(
            representationObjectWithProperties.testProperty1,
            properties.testProperty1
          );

          assert.equal(
            representationObjectWithProperties.testProperty2,
            properties.testProperty2
          );

          assert.equal(
            representationObjectWithProperties.testProperty3,
            properties.testProperty3
          );

          assert.equal(
            representationObjectWithProperties.testProperty4,
            properties.testProperty4
          );

        });

        it('cannot have it\'s type overridden on initialization', function() {

          const representationObjectWrongType = newObject(client, {
            type: 'INCORRECT_TYPE'
          });

          assert.equal(
            representationObjectWrongType.type,
            objectType
          );

        });

      });

      describe('Inherited prototypes', function() {

        describe('prototype.save();', function() {

          let client;
          let representationObject;
          let skipTests;

          beforeEach(function() {
            client = new Nimvelo();
            representationObject = newObject(client, mockData.singleObject);
            skipTests = unavailableMethods.indexOf('save') >= 0;
          });

          it('method exists', function() {
            if (skipTests) this.skip();
            assert.equal(typeof representationObject.save, 'function');
          });

          it('returns a promise by default', function() {
            if (skipTests) this.skip();
            assert(representationObject.save() instanceof Promise);
          });

          it('doesn\'t return a promise if a callback is provided', function() {
            if (skipTests) this.skip();
            assert.notEqual(representationObject.save(function() {}) instanceof Promise);
          });

          it('calls a callback, if provided', function(done) {

            if (skipTests) this.skip();

            nock('https://pbx.sipcentric.com/api/v1/customers/me')
              .put(`/${listEndpoint}/${representationObject.id}/`)
              .query(true)
              .reply(200, representationObject);

            representationObject.save(done);

          });

          it('sends a PUT request to the instance resource if the item has an id', function(done) {

            if (skipTests) this.skip();

            nock('https://pbx.sipcentric.com/api/v1/customers/me')
              .put(`/${listEndpoint}/${representationObject.id}/`)
              .query(true)
              .reply(200, representationObject);

            representationObject.save(done);

          });

          it('sends a POST request to the list resource if the item doesn\'t have an id', function(done) {

            if (skipTests) this.skip();

            nock('https://pbx.sipcentric.com/api/v1/customers/me')
              .post(`/${listEndpoint}/`)
              .query(true)
              .reply(201, representationObject);

            delete representationObject.id;

            representationObject.save(done);

          });

          it('sets the returned PUT data on the object', function(done) {

            if (skipTests) this.skip();

            const testProperty = 'test';

            nock('https://pbx.sipcentric.com/api/v1/customers/me')
              .put(`/${listEndpoint}/${representationObject.id}/`)
              .query(true)
              .reply(200, function(uri, requestBody) {
                const parsedJSON = JSON.parse(requestBody);
                parsedJSON.testProperty = 'test';
                return JSON.stringify(parsedJSON);
              });

            representationObject.save(function(err, data) {
              if (err) {
                done(err);
              } else if (data.hasOwnProperty('testProperty') && data.testProperty === testProperty) {
                done();
              } else {
                done(new Error('Property not set correctly on returned object'));
              }
            });

          });

          it('sets the returned POST data on the object', function(done) {

            if (skipTests) this.skip();

            const testProperty = 'test';

            nock('https://pbx.sipcentric.com/api/v1/customers/me')
              .post(`/${listEndpoint}/`)
              .query(true)
              .reply(201, function(uri, requestBody) {
                const parsedJSON = JSON.parse(requestBody);
                parsedJSON.testProperty = 'test';
                return JSON.stringify(parsedJSON);
              });

            delete representationObject.id;

            representationObject.save(function(err, data) {
              if (err) {
                done(err);
              } else if (data.hasOwnProperty('testProperty') && data.testProperty === testProperty) {
                done();
              } else {
                done(new Error('Property not set correctly on returned object'));
              }
            });

          });

          it('passes through request errors correctly', function(done) {

            if (skipTests) this.skip();

            nock('https://pbx.sipcentric.com/api/v1/customers/me')
              .put(`/${listEndpoint}/${representationObject.id}/`)
              .query(true)
              .reply(404);

            representationObject.save().then(function() {
              done(new Error('Request error not passed through correctly'));
            }, function(err) {
              if (err.message === 'Status Code: 404') {
                done();
              } else {
                done(new Error('Request error not passed through correctly'));
              }
            });

          });

        });

        describe('prototype.delete();', function() {

          let client;
          let representationObject;
          let skipTests;

          beforeEach(function() {
            client = new Nimvelo();
            representationObject = newObject(client, mockData.singleObject);
            skipTests = unavailableMethods.indexOf('delete') >= 0;
          });

          it('method exists', function() {
            if (skipTests) this.skip();
            assert.equal(typeof representationObject.delete, 'function');
          });

          it('returns a promise by default', function() {
            if (skipTests) this.skip();
            assert(representationObject.delete() instanceof Promise);
          });

          it('doesn\'t return a promise if a callback is provided', function() {
            if (skipTests) this.skip();
            assert.notEqual(representationObject.delete(function() {}) instanceof Promise);
          });

          it('calls a callback, if provided', function(done) {

            if (skipTests) this.skip();

            nock('https://pbx.sipcentric.com/api/v1/customers/me')
              .delete(`/${listEndpoint}/${representationObject.id}/`)
              .query(true)
              .reply(204);

            representationObject.delete(done);

          });

          it('sends a DELETE request to the instance resource', function(done) {

            if (skipTests) this.skip();

            nock('https://pbx.sipcentric.com/api/v1/customers/me')
              .delete(`/${listEndpoint}/${representationObject.id}/`)
              .query(true)
              .reply(204);

            representationObject.delete().then(done, done);

          });

          it('passes through request errors correctly', function(done) {

            if (skipTests) this.skip();

            nock('https://pbx.sipcentric.com/api/v1/customers/me')
              .delete(`/${listEndpoint}/${representationObject.id}/`)
              .query(true)
              .reply(404);

            representationObject.delete().then(function() {
              done(new Error('Request error not passed through correctly'));
            }, function(err) {
              if (err.message === 'Status Code: 404') {
                done();
              } else {
                done(new Error('Request error not passed through correctly'));
              }
            });

          });

        });

      });

    });

  });

};
