'use strict';

import Representation from './representation';

class Queuestatus extends Representation {

  constructor(client, properties, parent) {

    super(client, properties, parent);

    this.type = 'queuestatus';

  }

}

export default Queuestatus;
