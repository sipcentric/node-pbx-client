const Representation = require('./representation');

class Music extends Representation {
  constructor(client, properties, parent) {
    super(client, properties, parent);

    this.type = 'music';
  }
}

module.exports = Music;
