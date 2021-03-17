export const getBasicAuthHeader = (username: string, password: string) => {
  const encodedCredentials = Buffer.from(`${username}:${password}`).toString(
    'base64',
  );
  return `Basic ${encodedCredentials}`;
};

export const scAuthenticate = (
  username: string,
  password: string,
  authBase: string,
) => {
  const authHeader = getBasicAuthHeader(username, password);
  const headers = {
    Authorization: authHeader,
    'X-WWW-Authenticate': 'false',
  };
  const method = 'POST';

  return fetch(authBase, {
    method,
    headers,
  }).then(async (res) => {
    if (res.status !== 200) {
      const text = await res.text();
      // TODO custom error type
      throw new Error(
        `Authentication failed with status code ${res.status}: ${text}`,
      );
    }
    // Authentication succeeded
    const json = await res.json();
    const { accessToken } = json;
    return accessToken as string;
  });
};

export const urlPathForItemType = (type: string, id?: string) => {
  let path = '';
  const normalizedType = type.toLowerCase();

  switch (normalizedType) {
    case 'availablebundle':
      path = `${id}/callbundles/available`;
      break;
    case 'billingaccount':
      path = `${id}/billing`;
      break;
    case 'creditstatus':
      path = `${id}/creditstatus`;
      break;
    case 'customers':
      // Use the default base REST URL
      break;
    case 'customer':
      path = id || '';
      break;
    case 'estimate':
      path = 'estimate';
      break;
    case 'phone':
    case 'virtual':
    case 'group':
    case 'queue':
    case 'ivr':
    case 'mailbox':
      path = `${id}/endpoints`;
      break;
    case 'invoice':
      path = 'invoices';
      break;
    case 'phonebookentry':
      path = `${id}/phonebook`;
      break;
    case 'paymentmethod':
      path = 'paymentmethods';
      break;
    case 'queueentry':
      path = `${id}/queueentries`;
      break;
    case 'queuemembership':
      path = `${id}/queuememberships`;
      break;
    case 'queuestatus':
      path = `${id}/queuestatus`;
      break;
    case 'sipidentity':
    case 'sipidentitylist':
      path = `${id}/sip`;
      break;
    case 'sipregistration':
      path = 'registrations';
      break;
    case 'smsmessage':
      path = `${id}/sms`;
      break;
    case 'sound':
    case 'prompt':
    case 'music':
      path = `${id}/sounds`;
      break;
    // TODO phone number
    case 'did':
    default:
      path = `${id}/${normalizedType}s`;
      break;
  }

  return path;
};
