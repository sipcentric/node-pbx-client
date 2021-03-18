import { ApiItem } from '../interfaces';

export type EndpointTypes =
  | 'virtual'
  | 'phone'
  | 'ivr'
  | 'mailbox'
  | 'queue'
  | 'group'
  | 'trunk';

export interface APIEndpoint extends ApiItem {
  type: EndpointTypes;
  name: string;
  shortNumber: string;
  costCentre?: string;
}

export interface APICallQueue extends APIEndpoint {
  type: 'queue';
  id: string;
  uri: string;
  created: Date;
  abandonedThreshold: number;
  announcePosition: boolean;
  announcePositionInterval: number;
  keypressDestination: string;
  links: { entries: string; status: string };
  notifyEmail: string;
  memberRetryInterval: number;
  memberTimeout: number;
  entrySound: string;
  timeoutDestination: string;
  maxWait: number;
  members: string[];
  parent: string;
  playRinging: boolean;
  ringInUse: boolean;
  serviceLevelTarget: number;
  serviceLevelThreshold: number;
  strategy:
    | 'RINGALL'
    | 'LINEAR'
    | 'RRMEMORY'
    | 'FEWESTCALLS'
    | 'LEASTRECENT'
    | 'RANDOM';
  wrapUpTime: number;
  readOnly?: boolean;
  periodicAnnounceSounds: string[];
  periodicAnnounceInterval: number;
}

export interface APIExtension extends APIEndpoint {
  type: 'phone';
  email?: string;
  timeout: number;
  callWaiting?: boolean;
  callRecording: 'ALWAYS' | 'ON_DEMAND' | 'OFF';
  defaultCallerId: string;
  voicemailSettings: {
    autoAnswer: boolean;
    pin: string;
    playEnvelope: boolean;
    playCallerId: boolean;
    allowReview: boolean;
  };
  links: {
    sip: string; // uri of sip
    forwardingRules: string; // uri of forwardingRules
  };
}

export type IVRAction =
  | {
      type: 'transfer';
      destination?: string;
      playSound?: string;
      display?: string;
    }
  | { type: 'goto'; destination?: string }
  | { type: 'playsound'; sound?: string }
  | { type: 'dialext' };

export interface KeyActionIVR {
  key: string;
  action: IVRAction;
}

export interface APIIVR extends APIEndpoint {
  type: 'ivr';
  timeout: number;
  entrySound?: string;
  items: KeyActionIVR[];
  timeoutAction?: IVRAction;
  invalidAction?: IVRAction;
  readOnly?: boolean;
}

export interface APIPhoneExtension extends APIEndpoint {
  type: 'phone';
  email?: string;
  timeout: number;
  callWaiting?: boolean;
  callRecording: 'ALWAYS' | 'ON_DEMAND' | 'OFF';
  defaultCallerId: string;
  voicemailSettings: {
    autoAnswer: boolean;
    pin: string;
    playEnvelope: boolean;
    playCallerId: boolean;
    allowReview: boolean;
  };
  links: {
    sip: string; // uri of sip
    forwardingRules: string; // uri of forwardingRules
  };
  readOnly?: boolean;
  hotdeskPin?: string; // will never get returned in response, but can be written to
}

export interface APIRingGroup extends APIEndpoint {
  type: 'group';
  id: string;
  uri: string;
  created: Date;
  memberTimeout: number;
  ringFor: number;
  cascadeDelay: number;
  failoverDestination?: string;
  members: string[];
  parent: string;
  readOnly?: boolean;
}

export interface APISharedMailbox extends APIEndpoint {
  type: 'mailbox';
  uri: string;
  created: Date;
  email: string;
  allowReview: boolean;
  pin: string;
  playCallerId: boolean;
  playEnvelope: boolean;
  readOnly?: boolean;
}

export interface APITrunk extends APIEndpoint {
  channels: number;
  links: { sip: string; forwardingRules: string };
  timeout: number;
  type: 'trunk';
  defaultCallerId?: string;
  readOnly?: boolean;
}

export interface APIVirtual extends APIEndpoint {
  type: 'virtual';
  id: string;
  uri: string;
  created: Date;
  destination: string;
  timeout: number;
  screeningEnabled: boolean;
  readOnly?: boolean;
}
