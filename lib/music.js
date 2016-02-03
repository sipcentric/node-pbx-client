'use strict';

import Representation from './representation';

class Music extends Representation {

  constructor(client, properties, parent) {

    super(client, properties, parent);

    this.type = 'music';

  }

}

export default Music;
