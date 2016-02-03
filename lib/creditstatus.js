'use strict';

import Representation from './representation';

class Creditstatus extends Representation {

  constructor(client, properties, parent) {

    super(client, properties, parent);

    this.type = 'creditstatus';

  }

}

export default Creditstatus;
