'use strict';

import Representation from './representation';

class Forwardingrule extends Representation {

  constructor(client, properties, parent) {

    super(client, properties, parent);

    this.type = 'forwardingrule';

  }

}

export default Forwardingrule;
