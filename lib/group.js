'use strict';

const Representation = require('./representation');

class Group extends Representation {

  constructor(client, properties, parent) {

    super(client, properties, parent);

    this.type = 'group';

  }

}

module.exports = Group;
