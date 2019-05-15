import extend = require('deep-extend');
import {
  RepresentationInterface,
  NimveloClient,
  RepresentationBase,
  ApiItem,
  Callback,
} from '../interfaces';

class Representation implements RepresentationInterface {
  protected client: NimveloClient;
  public id?: string;
  public parent: RepresentationBase | string;
  public _unavailableMethods: string[];

  protected _type: string;
  protected _json: ApiItem;

  public get type(): string {
    return this._type;
  }

  public get json(): ApiItem {
    return this._json;
  }

  constructor(
    client: NimveloClient,
    properties?: ApiItem,
    parent?: RepresentationBase | string,
  ) {
    this.client = client;
    if (properties) {
      const { type, ...props } = properties;
      extend(this, props);
    }
    if (parent) {
      this.parent = parent;
    }
    this._type = 'none';
    this._json = properties;
  }

  extend = (params: ApiItem) => {
    const { type, ...rest } = params;
    extend(this, rest);
    extend(this._json, rest);
  };

  save = (callback?: Callback): Promise<any> => {
    return this.client._saveRepresentation(this, callback);
  };

  delete = (callback?: Callback): Promise<any> => {
    return this.client._deleteRepresentation(this, callback);
  };
}

export default Representation;
