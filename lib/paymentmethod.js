'use strict';

import Representation from './representation';

class Paymentmethod extends Representation {

  constructor(client, properties, parent) {

    super(client, properties, parent);

    this.type = 'paymentmethod';

  }

}

export default Paymentmethod;
