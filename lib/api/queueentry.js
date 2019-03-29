const Representation = require('./representation');

class Queueentry extends Representation {
  constructor(client, properties, parent) {
    super(client, properties, parent);

    this.type = 'queueentry';
  }
}

module.exports = Queueentry;
