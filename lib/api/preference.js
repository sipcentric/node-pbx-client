const Representation = require('./representation');

class Preference extends Representation {
  constructor(client, properties, parent) {
    super(client, properties, parent);

    this.type = 'preference';
  }
}

module.exports = Preference;
