'use strict';

import Representation from './representation';

class Availablebundle extends Representation {

  constructor(client, properties, parent) {

    super(client, properties, parent);

    this.type = 'availablebundle';

  }

}

export default Availablebundle;
