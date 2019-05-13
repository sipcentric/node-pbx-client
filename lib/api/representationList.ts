import Representation from './representation';
import {
  RepresentationListInterface,
  RepresentationBase,
  NimveloClient,
  QueryParams,
  Callback,
} from '../interfaces';

class RepresentationList implements RepresentationListInterface {
  protected client: NimveloClient;
  public parent: RepresentationBase;
  public _unavailableMethods: string[];

  protected _type: string;
  protected _itemType: string;

  public get type() {
    return this._type;
  }
  public get itemType() {
    return this._itemType;
  }

  constructor(client: NimveloClient, parent?: RepresentationBase) {
    this.client = client;
    this.parent = parent;
  }

  get(id?: string, params?: QueryParams, callback?: Callback) {
    return this.client._getResource(this.itemType, this, id, params, callback);
  }

  create(properties: object = {}) {
    // Make sure the type is correct, and it has no ID
    const { id, ...rest } = properties as any;
    const sanitizedProperties = {
      ...rest,
      type: this.itemType,
    };

    return this.client._objectFromItem(sanitizedProperties, this.parent);
  }
}

export default RepresentationList;
