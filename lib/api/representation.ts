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
  public parent: RepresentationBase;
  public _unavailableMethods: string[];

  protected _type: string;

  public get type(): string {
    return this._type;
  }

  constructor(
    client: NimveloClient,
    properties?: ApiItem,
    parent?: RepresentationBase,
  ) {
    this.client = client;
    const { type, ...props } = properties;
    extend(this, props);
    this.parent = parent;
    this._type = 'none';
  }

  save(callback?: Callback): Promise<any> {
    return this.client._saveRepresentation(this, callback);
  }

  delete(callback?: Callback): Promise<any> {
    return this.client._deleteRepresentation(this, callback);
  }
}

export default Representation;
