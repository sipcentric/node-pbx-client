const Representation = require('./representation');

class Virtual extends Representation {
  constructor(client, properties, parent) {
    super(client, properties, parent);

    this.type = 'virtual';
  }
}

module.exports = Virtual;
