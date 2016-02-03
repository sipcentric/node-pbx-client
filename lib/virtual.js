'use strict';

import Representation from './representation';

class Virtual extends Representation {

  constructor(client, properties, parent) {

    super(client, properties, parent);

    this.type = 'virtual';

  }

}

export default Virtual;
