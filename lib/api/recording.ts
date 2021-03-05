import Representation from './representation';
import { SipcentricClient, ApiItem, RepresentationBase } from '../interfaces';
import { APICallRecording } from '../interfaces/api';

class CallRecordingRepresentation extends Representation<APICallRecording> {
  constructor(
    client: SipcentricClient,
    properties: APICallRecording,
    parent: RepresentationBase | string,
  ) {
    super(client, 'recording', properties, parent);

    this._unavailableMethods = ['save'];
    this._unavailableMethods.forEach((method) => delete (this as any)[method]);
  }
}

export default CallRecordingRepresentation;
