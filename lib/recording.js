'use strict';

import Representation from './representation';

class Recording extends Representation {

  constructor(client, properties, parent) {

    super(client, properties, parent);

    this.type = 'recording';

    this._unavailableMethods = ['save'];
    this._unavailableMethods.forEach(method => delete this[method]);

  }

}

export default Recording;
