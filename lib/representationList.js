'use strict';

class RepresentationList {

  constructor(client) {
    this.client = client;
  }


  list(params, callback) {
    return this.client._getResource(this.itemType, params, callback);
  }


  find(id, params, callback) {
    return this.client._getResource(this.itemType, id, params, callback);
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
