'use strict';

const Representation = require('./representation');
const RoutingruleList = require('./routingruleList');

class Phonenumber extends Representation {

  constructor(client, properties, parent) {

    super(client, properties, parent);

    this.type = 'phonenumber';

    this.routingrules = new RoutingruleList(this.client, this);

  }

}

module.exports = Phonenumber;
