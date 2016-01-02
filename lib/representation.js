'use strict';

const extend = require('deep-extend');

class Representation {

  constructor(client) {
    this.client = client;
  }


  save(callback) {

    const type = this.type;

    const requestCallback = (err, data, response) => {

      if (!callback) {
        return;
      }

      if (err) {
        callback(err, data, response);
        return;
      }

      // Update our object with the newly returned propreties
      extend(this, data);

      // Pass our newly updated object to the callback
      callback(null, this, response);

    };

    if (this.id) {

      this.client._request('put', type, this.id, this, requestCallback);

    } else {

      this.client._request('post', type, this, requestCallback);

    }

  }


  delete(callback) {

    const type = this.type;

    this.client._request('delete', type, this.id, function handleDeleteResponse(err, data, response) {

      if (!callback) {
        return;
      }

      if (err) {
        callback(err, response);
        return;
      }

      callback(null, response);

    });

  }

}

module.exports = Representation;
