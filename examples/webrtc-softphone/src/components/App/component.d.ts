export default App;
/**
 * This example illustrates how to get a softphone working using the
 * Sipcentric PBX Client. Everything you need is contained within this
 * single component.
 *
 * !!! IMPORTANT !!!
 * =================
 *
 * Make sure to fill in your username and password when instantiating
 * Sipcentric in componentDidMount().
 */
declare class App {
    constructor(props: any);
    localAudioRef: any;
    remoteAudioRef: any;
    state: {
        inputValue: string;
        ua: any;
        session: any;
        onHold: boolean;
        confirmed: boolean;
        registered: boolean;
        log: any[];
    };
    log(str: any): void;
    componentDidMount(): Promise<void>;
    clearSession(): void;
    call(): void;
    bindRemoteAudio(session: any): void;
    bindSessionHandlers(session: any): void;
    hangUp(): void;
    render(): any;
}
