'use strict';

import Representation from './representation';
import ForwardingruleList from './forwardingruleList';
import SipidentityList from './sipidentityList';

class Phone extends Representation {

  constructor(client, properties, parent) {

    super(client, properties, parent);

    this.type = 'phone';

    this.sip = new SipidentityList(this.client, this);
    this.forwardingrules = new ForwardingruleList(this.client, this);

  }

}

export default Phone;
