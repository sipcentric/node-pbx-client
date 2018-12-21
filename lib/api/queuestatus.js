const Representation = require('./representation');

class Queuestatus extends Representation {
  constructor(client, properties, parent) {
    super(client, properties, parent);

    this.type = 'queuestatus';
  }
}

module.exports = Queuestatus;
