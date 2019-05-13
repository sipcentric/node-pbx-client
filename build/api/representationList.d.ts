import { RepresentationListInterface, RepresentationBase, NimveloClient, QueryParams, Callback } from '../interfaces';
declare class RepresentationList implements RepresentationListInterface {
    protected client: NimveloClient;
    parent: RepresentationBase;
    _unavailableMethods: string[];
    protected _type: string;
    protected _itemType: string;
    readonly type: string;
    readonly itemType: string;
    constructor(client: NimveloClient, parent?: RepresentationBase);
    get(id?: string, params?: QueryParams, callback?: Callback): void | Promise<any>;
    create(properties?: object): import("../interfaces").RepresentationInterface;
}
export default RepresentationList;
