"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const atmosphere = __importStar(require("atmosphere.js"));
class Stream {
    constructor(client) {
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
        this.stream.onError = function streamError(error) {
            console.log(`Stream error: ${error.reasonPhrase}`);
        };
    }
    subscribe(type, callback) {
        this.stream.onMessage = function streamMessage(data) {
            let message;
            try {
                message = JSON.parse(data.responseBody);
            }
            catch (err) {
                // Ignore SyntaxErrors
                if (`${err}`.substr(0, 11) !== 'SyntaxError') {
                    console.log(`Error parsing JSON: ${err}`);
                }
                return;
            }
            if ((Array.isArray(type) && type.indexOf(message.event) > -1) ||
                (typeof type === 'string' && message.event === type)) {
                callback(message);
            }
        };
        atmosphere.subscribe(this.stream);
    }
}
exports.default = Stream;
