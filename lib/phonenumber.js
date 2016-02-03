'use strict';

import Representation from './representation';
import RoutingruleList from './routingruleList';

class Phonenumber extends Representation {

  constructor(client, properties, parent) {

    super(client, properties, parent);

    this.type = 'phonenumber';

    this.routingrules = new RoutingruleList(this.client, this);

  }

}

export default Phonenumber;
