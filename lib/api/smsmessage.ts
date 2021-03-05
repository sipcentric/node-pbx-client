import Representation from './representation';
import { SipcentricClient, ApiItem, RepresentationBase } from '../interfaces';
import { APISMSMessage } from '../interfaces/api';

class SmsMessageRepresentation extends Representation<APISMSMessage> {
  constructor(
    client: SipcentricClient,
    properties: APISMSMessage,
    parent: RepresentationBase | string,
  ) {
    super(client, 'smsmessage', properties, parent);

    this._type = 'smsmessage';

    this._unavailableMethods = ['delete'];
    this._unavailableMethods.forEach((method) => delete (this as any)[method]);
  }
}

export default SmsMessageRepresentation;
