'use strict';

import Representation from './representation';
import QueueentriesList from './queueentriesList';
import QueuestatusList from './queuestatusList';

class Queue extends Representation {

  constructor(client, properties, parent) {

    super(client, properties, parent);

    this.type = 'queue';

    this.entries = new QueueentriesList(this.client, this);
    this.status = new QueuestatusList(this.client, this);

  }

}

export default Queue;
