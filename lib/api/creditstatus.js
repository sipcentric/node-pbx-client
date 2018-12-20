const Representation = require('./representation');

class Creditstatus extends Representation {
  constructor(client, properties, parent) {
    super(client, properties, parent);

    this.type = 'creditstatus';
  }
}

module.exports = Creditstatus;
