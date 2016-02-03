'use strict';

import Representation from './representation';

class Queueentries extends Representation {

  constructor(client, properties, parent) {

    super(client, properties, parent);

    this.type = 'queueentries';

  }

}

export default Queueentries;
