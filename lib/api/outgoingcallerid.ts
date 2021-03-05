import Representation from './representation';
import { SipcentricClient, ApiItem, RepresentationBase } from '../interfaces';
import { APIOutgoingCLI } from '../interfaces/api';

class OutgoingCallerIdRepresentation extends Representation<APIOutgoingCLI> {
  constructor(
    client: SipcentricClient,
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
