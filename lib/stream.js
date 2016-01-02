'use strict';

// Module dependencies
const atmosphere = require('atmosphere.js');

class Stream {

  constructor(client) {

    this.client = client;

    this.stream = {
      url: this.client.options.streamBase,
      contentType: 'application/json',
      logLevel: 'debug',
      headers: {
        'Authorization': this.client.authorization
      },
      dropHeaders: false,
      attachHeadersAsQueryString: false,
      maxReconnectOnClose: 0,
      enableXDR: true,
      transport: 'streaming'
    };


    this.stream.onOpen = function streamOpen() {

      console.log('Connected to stream');

    };


    this.stream.onError = function streamError(error) {

      console.log('Stream error: ' + error.reasonPhrase);

    };

  }


  subscribe(type, callback) {

    this.stream.onMessage = function streamMessage(data) {

      let message;

      try {
        message = JSON.parse(data.responseBody);
      } catch (err) {

        // Ignore SyntaxErrors
        if ((err + '').substr(0, 11) !== 'SyntaxError') {
          console.log('Error parsing JSON: ' + err);
        }

        return;

      }

      if (message.event === type) {
        callback(message);
      }

    };

    atmosphere.subscribe(this.stream);

  }

}

module.exports = Stream;
