'use strict';

import Representation from './representation';

class Phonebookentry extends Representation {

  constructor(client, properties, parent) {

    super(client, properties, parent);

    this.type = 'phonebookentry';

  }

}

export default Phonebookentry;
