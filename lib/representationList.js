'use strict';

class RepresentationList {

  constructor(client, customerId) {
    this.client = client;
    this.customerId = customerId;
  }


  list(params, callback) {
    return this.client._getResource(this.itemType, this.customerId, params, callback);
  }


  find(id, params, callback) {
    return this.client._getResource(this.itemType, this.customerId, id, params, callback);
  }


  create(properties) {

    if (typeof properties !== 'object') {
      /* eslint no-param-reassign:0 */
      properties = {};
    }

    // Make sure the type is correct, and it has no ID
    properties.id = undefined;
    properties.type = this.itemType;

    const object = this.client._objectFromItem(properties);

    return this.client._setCustomerIdOnObjects(object, this.customerId);

  }

}

module.exports = RepresentationList;
