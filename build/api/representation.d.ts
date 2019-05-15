import { RepresentationInterface, NimveloClient, RepresentationBase, ApiItem, Callback } from '../interfaces';
declare class Representation implements RepresentationInterface {
    protected client: NimveloClient;
    id?: string;
    parent: RepresentationBase | string;
    _unavailableMethods: string[];
    protected _type: string;
    protected _json: ApiItem;
    readonly type: string;
    readonly json: ApiItem;
    constructor(client: NimveloClient, properties?: ApiItem, parent?: RepresentationBase | string);
    extend: (params: ApiItem) => void;
    save: (callback?: Callback) => Promise<any>;
    delete: (callback?: Callback) => Promise<any>;
}
export default Representation;
