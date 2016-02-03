'use strict';

import Representation from './representation';

class Callbundle extends Representation {

  constructor(client, properties, parent) {

    super(client, properties, parent);

    this.type = 'callbundle';

  }

}

export default Callbundle;
