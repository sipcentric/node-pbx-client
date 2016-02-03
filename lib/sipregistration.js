'use strict';

import Representation from './representation';

class Sipregistration extends Representation {

  constructor(client, properties, parent) {

    super(client, properties, parent);

    this.type = 'sipregistration';

  }

}

export default Sipregistration;
