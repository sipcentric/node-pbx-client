'use strict';

import Representation from './representation';

class Invoice extends Representation {

  constructor(client, properties, parent) {

    super(client, properties, parent);

    this.type = 'invoice';

  }

}

export default Invoice;
