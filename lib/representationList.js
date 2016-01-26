'use strict';

class RepresentationList {

  constructor(client, parent) {
    this.client = client;
    this.parent = parent;
  }


  list(params, callback) {
    return this.client._getResource(this.itemType, this, params, callback);
  }


  find(id, params, callback) {
    return this.client._getResource(this.itemType, this, id, params, callback);
  }


  create(properties = {}) {

    // Make sure the type is correct, and it has no ID
    properties.id = undefined;
    properties.type = this.itemType;

    return this.client._objectFromItem(properties, this.parent);

  }

}

module.exports = RepresentationList;
