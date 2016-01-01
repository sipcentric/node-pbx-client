'use strict';

// Module dependencies
const atmosphere = require('atmosphere.js');

// Class dependencies
const Nimvelo = require('./nimvelo');

class Stream extends Nimvelo {

  constructor(options) {

    super(options);

    this.stream = {
      url: this.options.streamBase,
      contentType: 'application/json',
      logLevel: 'debug',
      headers: {
        'Authorization': this.authorization
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
