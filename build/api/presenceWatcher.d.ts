import { NimveloClient } from '../interfaces';
declare class PresenceWatcher {
    protected client: NimveloClient;
    protected dialogStateMap: Map<string, string>;
    protected customerId: any;
    constructor(client: NimveloClient);
    _getDialogState(notification: any): any;
    _getExtensionCredentials(extensionId: any): Promise<{
        username: any;
        password: any;
    }>;
    subscribe(options?: any): Promise<any>;
}
export default PresenceWatcher;
