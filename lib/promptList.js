'use strict';

import RepresentationList from './representationList';

class PromptList extends RepresentationList {

  constructor(client, parent) {
    super(client, parent);
    this.type = 'promptList';
    this.itemType = 'prompt';
  }

}

export default PromptList;
