const Representation = require('./representation');

class Queuememberships extends Representation {
  constructor(client, properties, parent) {
    super(client, properties, parent);

    this.type = 'queuememberships';
  }
}

module.exports = Queuememberships;
