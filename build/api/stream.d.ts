declare class Stream {
    protected client: NimveloClient;
    stream: any;
    constructor(client: NimveloClient);
    subscribe(type: any, callback: Callback): void;
}
export default Stream;
