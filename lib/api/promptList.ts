import RepresentationList from './representationList';
import Representation from './representation';

class PromptList extends RepresentationList {
  constructor(client: NimveloClient, parent: RepresentationBase) {
    super(client, parent);
    this._type = 'promptList';
    this._itemType = 'prompt';
  }
}

export default PromptList;
