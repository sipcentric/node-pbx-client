const Representation = require('./representation');

class Linkeduser extends Representation {
  constructor(client, properties, parent) {
    super(client, properties, parent);

    this.type = 'linkeduser';
  }
}

module.exports = Linkeduser;
