import { ApiItem } from '../interfaces';

type PaymentProviders = 'worldpay' | 'stripe';

export interface APIBilling {
  type: 'billingaccount';
  uri: string;
  id: string;
  parent: string;
  providersEnabled: PaymentProviders[];
  paymentsEnabled: boolean;
  testAccount: boolean;
  upgradeAllowed: boolean;
  downgradeAllowed: boolean;
  paymentMethodRequired: boolean;
  currency: string;
  frequency: string;
  nextBillingDate: Date;
  featurePricing: {
    virtual: number;
    queue: number;
    ivr: number;
    phone: number;
    did: number;
    group: number;
    mailbox: number;
    trunk?: number;
  };
  links: {
    paymentMethods: string;
    estimate: string;
    invoices: string;
  };
}

// FIXME wrong interface

export interface APIBillingEstimate {
  created: Date;
  credit: boolean;
  date: Date;
  id: string;
  lines: {
    description: string;
    lineTotal: number;
    quantity: number;
    unitPrice: number;
  }[];
  netAmount: number;
  total: number;
  type: 'estimate';
  uri: string;
  vatAmount: number;
}

export interface APIBillingInvoice extends ApiItem {
  balance: number;
  credit: boolean;
  date: Date;
  lines: {
    description: string;
    lineTotal: number;
    quantity: number;
    unitPrice: number;
  }[];
  netAmount: number;
  ref: string;
  token: string;
  total: number;
  type: 'invoice';
  vatAmount: number;
}

export interface APIWorldPayPaymentMethod extends ApiItem {
  futurePayId: string;
  pendingApproval: boolean;
  type: 'worldpay';
}

export interface APIStripePaymentMethod extends ApiItem {
  type: 'stripe';
  id: string;
  created: Date;
  stripeId: string;
  subType: string;
  card: {
    brand: string;
    expMonth: number;
    expYear: number;
    last4: string;
    name?: string;
    funding?: string;
  };
  pendingApproval: boolean;
}

export type APIBillingPaymentMethod =
  | APIWorldPayPaymentMethod
  | APIStripePaymentMethod;

export interface APISetupIntent {
  type: 'stripesetupintent';
  id: string;
  created: Date;
  clientSecret: string;
  status: string;
  publishableKey: string;
}

export interface APICreditStatus {
  type: 'creditstatus';
  uri: string;
  accountType: 'PREPAID' | 'POSTPAID';
  balance: number;
  parent: string;
}

export interface APICallCharging {
  chargingPlan: string;
  creditLimit: number;
  id: string;
  parent: string;
  postpaid: boolean;
  type: 'customercallcharging';
  uri: string;
  warningThreshold: number;
}

export interface APIChargingPlan {
  domainCostMinute: number;
  id: string;
  minCharge: number;
  minDuration: number;
  name: string;
  roundSeconds: number;
  type: 'chargingplan';
  uri: string;
}
