const Representation = require('./representation');

class Sipregistration extends Representation {
  constructor(client, properties, parent) {
    super(client, properties, parent);

    this.type = 'sipregistration';
  }
}

module.exports = Sipregistration;
