const Representation = require('./representation');

class Ivr extends Representation {
  constructor(client, properties, parent) {
    super(client, properties, parent);

    this.type = 'ivr';
  }
}

module.exports = Ivr;
