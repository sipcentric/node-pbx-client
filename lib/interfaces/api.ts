import { ApiItem } from '../interfaces';

export interface APIAreaCode {
  type: 'areacode';
  id: string;
  uri: string;
  country: string;
  areaCode: string;
  description: string;
}

export interface AvailableNumber {
  type: 'availablenumber';
  id: string;
  url: string;
  country: string;
  areaCode: string;
  number: string;
  formatted: string;
}

export interface APICallsSummary {
  type: 'callsummary';
  totalOut: number;
  totalIn: number;
  durationOut: number;
  durationIn: number;
  totalCost: number;
  totalSell: number;
}

export interface APILimits {
  channel: number;
  did: number;
  group: number;
  id: string;
  ivr: number;
  mailbox: number;
  parent: string;
  phone: number;
  queue: number;
  type: 'customerlimits';
  uri: string;
  trunk: number;
}

export interface PhoneNumber {
  area: string;
  country: string;
  formattedNumber: string;
  fullNumber: string;
  id: string;
  number: string;
  price: number;
  quality: number;
}

export interface APIPermissions {
  addFeatures: boolean;
  enableRecording: boolean;
  id: string;
  incomingCalls: boolean;
  internationalCalls: boolean;
  outgoingCalls: boolean;
  parent: string;
  removeFeatures: boolean;
  type: 'customerpermissions';
  uri: string;
}

export interface APIPreferences {
  id: string;
  recordingExpireDays: number;
  parent: string;
  type: 'customerpreferences';
  uri: string;
}

export interface APIPricing {
  id: string;
  parent: string;
  type: 'customerpricing';
  uri: string;
  virtual?: number;
  ivr?: number;
  trunk?: number;
  did?: number;
  group?: number;
  mailbox?: number;
  phone?: number;
  queue?: number;
}

export interface APIRecordingSummary {
  type: 'recordingsummary';
  totalSize: number;
}

export interface APIReferralCode {
  referral_code: string;
}
export interface APIReferralStats {
  referred: number;
  earned: number;
}

export interface APISMSSummary {
  totalOut: number;
  totalIn: number;
  totalCost: number;
  type: 'smssummary';
}

export interface APIBargeGroup extends ApiItem {
  uri: string;
  created: Date;
  managers: string[];
  members: string[];
  name: string;
  type: 'bargegroup';
  readOnly: boolean;
}

export interface APICallBundle extends ApiItem {
  autoRenew: boolean;
  availableMins: number;
  includedMins: number;
  monthlyMins: number;
  name: string;
  priceMonthly: number;
  status: 'ACTIVE' | 'EXPIRED';
  type: 'customerbundle';
  usedMins: number;
  validFrom: Date;
  validTo: Date;
}

export interface APIAvailableBundle extends ApiItem {
  destinations: string[];
  inclusiveMins: number;
  name: string;
  priceMonthly: number;
  type: 'availablebundle';
}

export interface APICallRecording extends ApiItem {
  direction: 'IN' | 'OUT';
  callId: string;
  linkedId: string;
  endpoint: string;
  partyId: string;
  size: number;
  started: string;
  type: 'recording';
}

export interface APICall extends ApiItem {
  type: 'call';
  scope: 'LOCAL' | 'DOMAIN' | 'EXTERNAL';
  direction: 'IN' | 'OUT';
  from: string;
  to: string;
  callerId: string;
  callStarted: string;
  outcome: 'ANSWERED' | 'NO_ANSWER' | 'BUSY' | 'FAILED';
  duration: number;
  cost: number;
  sell: number;
  callId: string;
  linkedId: string;
  srcEndpoint: string;
  dstEndpoint: string;
}

export enum AccountType {
  BUSINESS = 'BUSINESS',
  RESIDENTIAL = 'RESIDENTIAL',
  UNKNOWN = 'UNKNOWN',
}

export interface APICustomer extends ApiItem {
  type: 'customer';
  accountType: AccountType;
  id: string;
  created: Date;
  company: string;
  firstName: string;
  lastName: string;
  telephone: string;
  email: string;
  address1: string;
  address2: string;
  city: string;
  postcode: string;
  enabled: boolean;
  partnerId?: string;
  partnerCompany?: string;
  userEmailUpdatable: boolean;
}

export interface APIForwardingRule extends ApiItem {
  type: 'forwardingrule';
  enabled: boolean;
  timeInterval: string;
  action: 'FORWARD' | 'FOLLOWME' | 'VOICEMAIL';
  callOutcome?: 'BUSY' | 'NOANSWER' | 'FAILURE';
  externalOnly: boolean;
  applyGroup: boolean;
  preserveId: boolean;
  screeningEnabled: boolean;
  key?: number;
  destination: string;
}

export interface APIInvite extends ApiItem {
  type: 'invite';
  accepted?: string;
  customer: string;
  customerName: string;
  email: string;
  existingUser: boolean;
}

export interface APIBaseLinkedUser {
  // common properties for linked user (SUPPORT,RESELLER,ADMIN)
  type: 'linkeduser';
  accessLevel:
    | 'CUSTOMER'
    | 'EXTENSION'
    | 'RESELLER'
    | 'SUPPORT_L1'
    | 'SUPPORT_L2'
    | 'ADMIN';
  email: string;
  enabled: boolean;
  pending: boolean;
  owner: boolean;
  defaultExtension?: string;
  recordingAccess: 'NONE' | 'OWN' | 'ALL';
}

export interface APICreateLinkedUser extends APIBaseLinkedUser {
  activateUrl: string;
}

export interface APILinkedUser extends APIBaseLinkedUser, ApiItem {
  type: 'linkeduser';
  userId?: string;
  firstName?: string;
  lastName?: string;
  username?: string;

  // properties for CUSTOMER, EXTENSION
  acceptedInvite?: Date;
}

export interface APIOutgoingCLI extends ApiItem {
  allowCalls: boolean;
  allowSms: boolean;
  number: string;
  status: 'APPROVED' | 'PENDING' | 'REJECTED';
  type: 'outgoingcallerid';
  uri: string;
}

export interface APIPhonebook extends ApiItem {
  email: string;
  name: string;
  phoneNumber: string;
  priority: number;
  speedDial: number;
  type: 'phonebookentry';
}

export interface APIPhoneNumber extends ApiItem {
  type: 'did';
  number: string;
  formatted: string;
  destination: string;
  smsCapable: boolean;
  smsAllowIncoming?: boolean;
  smsNotificationMethod?: 'EMAIL' | 'URL';
  smsNotificationEmail?: string;
  smsNotificationUrl?: string;
  faxEnabled: boolean;
  faxNotificationEmail?: string;
  playSound?: string;
  identifier?: string;
  readOnly?: boolean;
}

export interface APISipIdentity extends ApiItem {
  type: 'sipidentity';
  username: string;
  password: string;
  domain: string;
}

export interface APISipRegistration extends ApiItem {
  type: 'sipregistration';
  userAgent: string;
  contact: string;
  received: string;
  socket: string;
  lanIP: string;
  wanIP: string;
  updated: Date;
  expires: Date;
}

export interface APIRoutingRule extends ApiItem {
  type: 'routingrule';
  timeInterval: string;
  destination: string;
}

export interface APISMSMessage extends ApiItem {
  body: string;
  cost: number;
  creditsUsed: number;
  direction: 'IN' | 'OUT';
  from: string;
  to: string;
  type: 'smsmessage';
  sendStatus?: 'PENDING' | 'SENT' | 'FAILED' | 'PARTIAL';
}

export interface APISoundPrompt extends ApiItem {
  type: 'prompt';
  name: string;
  size: number;
}

export interface APISoundMusic extends ApiItem {
  type: 'music';
  name: string;
  size: number;
  enabled: boolean;
}

interface APIBaseTimeInterval extends ApiItem {
  type: 'timeinterval';
  name: string;
  shared: boolean;
}

export interface WeeklyIncludedTime {
  daysOfWeek: DayOfWeek[];
  startTime: string;
  endTime: string;
}

export interface YearlyIncludedTime {
  month: MonthAbbreviation;
  dayOfMonth: number;
  endTime: string;
  startTime: string;
}

export interface APIWeeklyTimeInterval extends APIBaseTimeInterval {
  repeat: 'WEEKLY';
  includedTimes: WeeklyIncludedTime[];
}

export interface APIYearlyTimeInterval extends APIBaseTimeInterval {
  repeat: 'YEARLY';
  includedTimes: YearlyIncludedTime[];
}

export type APITimeInterval = APIWeeklyTimeInterval | APIYearlyTimeInterval;

export const DaysOfWeek = [
  'MON',
  'TUE',
  'WED',
  'THU',
  'FRI',
  'SAT',
  'SUN',
] as const;

export const MonthsByAbbreviation = {
  JAN: 'January',
  FEB: 'February',
  MAR: 'March',
  APR: 'April',
  MAY: 'May',
  JUN: 'June',
  JUL: 'July',
  AUG: 'August',
  SEP: 'September',
  OCT: 'October',
  NOV: 'November',
  DEC: 'December',
} as const;

export type DayOfWeek = typeof DaysOfWeek[number];

export type MonthAbbreviation = keyof typeof MonthsByAbbreviation;

export type UserLocale = 'en';

export type UserAccessLevel =
  | 'EXTENSION'
  | 'CUSTOMER'
  | 'RESELLER'
  | 'SUPPORT_L1'
  | 'SUPPORT_L2'
  | 'ADMIN';

export interface APIUser extends ApiItem {
  // API fields
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  locale: UserLocale;
  accessLevel: UserAccessLevel;
  userId: string;
  newPassword?: string;
  oldPassword?: string;
  passwordConfirm?: string;
}

// FIXME

export interface APIQueueStatus extends ApiItem {
  type: 'queuestatus';
}

export interface APIQueueEntry extends ApiItem {
  type: 'queueentry';
}

export interface APIQueueMembership extends ApiItem {
  type: 'queuemembership';
}
