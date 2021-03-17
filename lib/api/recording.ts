import Representation from './representation';
import { RepresentationBase } from '../interfaces';
import { APICallRecording } from '../interfaces/api';
import Sipcentric from '.';

class CallRecordingRepresentation extends Representation<APICallRecording> {
  constructor(
    client: Sipcentric,
    properties: APICallRecording,
    parent: RepresentationBase | string,
  ) {
    super(client, 'recording', properties, parent);

    this._unavailableMethods = ['save'];
    this._unavailableMethods.forEach((method) => delete (this as any)[method]);
  }
}

export default CallRecordingRepresentation;
