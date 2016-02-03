'use strict';

import Representation from './representation';

class Routingrule extends Representation {

  constructor(client, properties, parent) {

    super(client, properties, parent);

    this.type = 'routingrule';

  }

}

export default Routingrule;
