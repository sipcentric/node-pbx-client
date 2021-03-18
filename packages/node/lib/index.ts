import fetch from 'node-fetch';

// @ts-ignore
global.fetch = fetch;

import Sipcentric from '@sipcentric/base-pbx-client';
export default Sipcentric;
