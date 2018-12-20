const Representation = require('./representation');

class Phonebookentry extends Representation {
  constructor(client, properties, parent) {
    super(client, properties, parent);

    this.type = 'phonebookentry';
  }
}

module.exports = Phonebookentry;
