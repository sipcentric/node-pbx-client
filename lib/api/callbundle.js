const Representation = require('./representation');

class Callbundle extends Representation {
  constructor(client, properties, parent) {
    super(client, properties, parent);

    this.type = 'callbundle';
  }
}

module.exports = Callbundle;
