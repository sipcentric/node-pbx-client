'use strict';

import Representation from './representation';

class Outgoingcallerid extends Representation {

  constructor(client, properties, parent) {

    super(client, properties, parent);

    this.type = 'outgoingcallerid';

    this._unavailableMethods = ['save', 'delete'];
    this._unavailableMethods.forEach(method => delete this[method]);

  }

}

export default Outgoingcallerid;
