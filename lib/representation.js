'use strict';

const extend = require('deep-extend');

class Representation {

  constructor(client, properties, parent) {
    this.client = client;
    extend(this, properties);
    this.parent = parent;
  }


  save(callback) {

    if (this.id) {

      return new Promise((resolve, reject) => {

        this.client._request('put', this.type, this.customerId, this.id, this).then(data => {

          // Update our object with the newly returned propreties
          extend(this, data);

          resolve(data);

        }, error => {

          reject(error);

        });

      }).nodeify(callback);

    } else {

      return new Promise((resolve, reject) => {

        this.client._request('post', this.type, this.customerId, this).then(data => {

          // Update our object with the newly returned propreties
          extend(this, data);

          resolve(data);

        }, error => {

          reject(error);

        });

      }).nodeify(callback);

    }

  }


  delete(callback) {

    const type = this.type;

    return new Promise((resolve, reject) => {

      this.client._request('delete', type, this.customerId, this.id).then(() => {

        resolve();

      }, error => {

        reject(error);

      });

    }).nodeify(callback);

  }

}

module.exports = Representation;
