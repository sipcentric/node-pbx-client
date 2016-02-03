'use strict';

import Representation from './representation';

class Timeinterval extends Representation {

  constructor(client, properties, parent) {

    super(client, properties, parent);

    this.type = 'timeinterval';

  }

}

export default Timeinterval;
