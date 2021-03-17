import Representation from './representation';
import { RepresentationBase } from '../interfaces';
import { APIOutgoingCLI } from '../interfaces/api';
import Sipcentric from '.';

class OutgoingCallerIdRepresentation extends Representation<APIOutgoingCLI> {
  constructor(
    client: Sipcentric,
    properties: APIOutgoingCLI,
    parent: RepresentationBase | string,
  ) {
    super(client, 'outgoingcallerid', properties, parent);

    this._unavailableMethods = ['save', 'delete'];
    this._unavailableMethods.forEach((method) => {
      delete (this as any)[method];
    });
  }
}

export default OutgoingCallerIdRepresentation;
