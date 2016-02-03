'use strict';

import Representation from './representation';

class Preference extends Representation {

  constructor(client, properties, parent) {

    super(client, properties, parent);

    this.type = 'preference';

  }

}

export default Preference;
