'use strict';

import Representation from './representation';

class Mailbox extends Representation {

  constructor(client, properties, parent) {

    super(client, properties, parent);

    this.type = 'mailbox';

  }

}

export default Mailbox;
