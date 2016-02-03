'use strict';

import Representation from './representation';
import SipregistrationList from './sipregistrationList';

class Sipidentity extends Representation {

  constructor(client, properties, parent) {

    super(client, properties, parent);

    this.type = 'sipidentity';

    this.registrations = new SipregistrationList(this.client, this);

  }

}

export default Sipidentity;
