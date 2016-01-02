'use strict';

class RepresentationList {

  constructor(client) {
    this.client = client;
  }


  list(callback) {
    this.client._getResource(this.itemType, callback);
  }


  find(id, callback) {
    this.client._getResource(this.itemType, id, callback);
  }


  create(properties) {

    if (typeof properties !== 'object') {
      /* eslint no-param-reassign:0 */
      properties = {};
    }

    // Make sure the type is correct, and it has no ID
    properties.id = undefined;
    properties.type = this.itemType;

    return this.client._objectFromItem(properties);

  }

}

module.exports = RepresentationList;
