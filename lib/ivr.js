'use strict';

import Representation from './representation';

class Ivr extends Representation {

  constructor(client, properties, parent) {

    super(client, properties, parent);

    this.type = 'ivr';

  }

}

export default Ivr;
