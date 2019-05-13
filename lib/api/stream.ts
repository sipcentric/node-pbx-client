/* import * as atmosphere from 'atmosphere.js';
import { NimveloClient, Callback } from '../interfaces';

class Stream {
  protected client: NimveloClient;
  public stream: any;

  constructor(client: NimveloClient) {
    this.client = client;

    this.stream = {
      url: this.client.options.streamBase,
      contentType: 'application/json',
      logLevel: 'debug',
      headers: {
        Authorization: this.client.authorization,
      },
      dropHeaders: false,
      attachHeadersAsQueryString: false,
      maxReconnectOnClose: 0,
      enableXDR: true,
      transport: 'streaming',
    };

    this.stream.onOpen = function streamOpen() {
      console.log('Connected to stream');
    };

    this.stream.onError = function streamError(error: any) {
      console.log(`Stream error: ${error.reasonPhrase}`);
    };
  }

  subscribe(type: any, callback: Callback) {
    this.stream.onMessage = function streamMessage(data: any) {
      let message;

      try {
        message = JSON.parse(data.responseBody);
      } catch (err) {
        // Ignore SyntaxErrors
        if (`${err}`.substr(0, 11) !== 'SyntaxError') {
          console.log(`Error parsing JSON: ${err}`);
        }

        return;
      }

      if (
        (Array.isArray(type) && type.indexOf(message.event) > -1) ||
        (typeof type === 'string' && message.event === type)
      ) {
        callback(message);
      }
    };

    atmosphere.subscribe(this.stream);
  }
}

export default Stream;
*/
