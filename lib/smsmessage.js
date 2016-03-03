'use strict';

import Representation from './representation';

class Smsmessage extends Representation {

  constructor(client, properties, parent) {

    super(client, properties, parent);

    this.type = 'smsmessage';

    this._unavailableMethods = ['delete'];
    this._unavailableMethods.forEach(method => delete this[method]);

  }

}

export default Smsmessage;
