const Representation = require('./representation');

class Routingrule extends Representation {
  constructor(client, properties, parent) {
    super(client, properties, parent);

    this.type = 'routingrule';
  }
}

module.exports = Routingrule;
