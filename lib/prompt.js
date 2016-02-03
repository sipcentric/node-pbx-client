'use strict';

import Representation from './representation';

class Prompt extends Representation {

  constructor(client, properties, parent) {

    super(client, properties, parent);

    this.type = 'prompt';

  }

}

export default Prompt;
