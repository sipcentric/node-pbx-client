class RepresentationList {
  constructor(client, parent) {
    this.client = client;
    this.parent = parent;
  }

  get(id, params, callback) {
    return this.client._getResource(this.itemType, this, id, params, callback);
  }


  create(properties = {}) {
    // Make sure the type is correct, and it has no ID
    const sanitizedProperties = {
      ...properties,
      id: undefined,
      type: this.itemType,
    };

    return this.client._objectFromItem(sanitizedProperties, this.parent);
  }
}

module.exports = RepresentationList;
