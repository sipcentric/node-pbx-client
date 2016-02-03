'use strict';

import Representation from './representation';

class Group extends Representation {

  constructor(client, properties, parent) {

    super(client, properties, parent);

    this.type = 'group';

  }

}

export default Group;
