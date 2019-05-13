import { RepresentationInterface, NimveloClient, RepresentationBase, ApiItem, Callback } from '../interfaces';
declare class Representation implements RepresentationInterface {
    protected client: NimveloClient;
    id?: string;
    parent: RepresentationBase;
    _unavailableMethods: string[];
    protected _type: string;
    readonly type: string;
    constructor(client: NimveloClient, properties?: ApiItem, parent?: RepresentationBase);
    save(callback?: Callback): Promise<any>;
    delete(callback?: Callback): Promise<any>;
}
export default Representation;
