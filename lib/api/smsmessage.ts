import Representation from './representation';
import { RepresentationBase } from '../interfaces';
import { APISMSMessage } from '../interfaces/api';
import Sipcentric from '.';

class SmsMessageRepresentation extends Representation<APISMSMessage> {
  constructor(
    client: Sipcentric,
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
