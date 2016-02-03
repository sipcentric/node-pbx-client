'use strict';

import Representation from './representation';

class Call extends Representation {

  constructor(client, properties, parent) {

    super(client, properties, parent);

    this.type = 'call';

  }

}

export default Call;
