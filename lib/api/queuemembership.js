const Representation = require('./representation');

class Queuemembership extends Representation {
  constructor(client, properties, parent) {
    super(client, properties, parent);

    this.type = 'queuemembership';
  }
}

module.exports = Queuemembership;
