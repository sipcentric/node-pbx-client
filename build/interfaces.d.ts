export interface NimveloClient {
    VERSION: string;
    options: ClientOptions;
    authorization: string;
    customers: any;
    stream: any;
    presenceWatcher: any;
    authPromise: Promise<any>;
    init(options?: Partial<ClientOptions>): Promise<any>;
    _saveRepresentation(object: RepresentationInterface, callback: Callback): Promise<any>;
    _deleteRepresentation(object: RepresentationInterface, callback: Callback): Promise<any>;
    _getResource(type: string, object: RepresentationBase, ...args: any[]): Promise<any> | void;
    _objectFromItem(item: ApiItem, parent: RepresentationBase): RepresentationInterface;
}
export interface ClientOptions {
    username: string;
    password: string;
    auth: 'basic' | 'token';
    token?: string;
    customer: string;
    restBase: string;
    authBase: string;
    streamBase: string;
    json: boolean;
    requestOptions: {
        headers: {
            [header: string]: string;
        };
    };
}
export interface RepresentationTypeParams {
    type?: string;
}
export interface RepresentationBase {
    id?: string;
    type: string;
    parent: RepresentationBase;
    _unavailableMethods: string[];
}
export interface RepresentationInterface extends RepresentationBase {
    save(callback: Callback): Promise<any>;
    delete(callback: Callback): Promise<any>;
}
export interface RepresentationListInterface extends RepresentationBase {
    get(id: string, params: QueryParams, callback: Callback): Promise<any> | void;
    create(properties?: object): RepresentationInterface;
}
export interface ApiList<T extends ApiItem> {
    items: T[];
    totalItems: number;
    pageSize: number;
    page: number;
    nextPage?: string;
    prevPage?: string;
}
export interface FormattedApiList {
    totalItems: number;
    pageSize: number;
    page: number;
    nextPage?: PromisedCallback;
    prevPage?: PromisedCallback;
}
export interface ApiItem {
    type: string;
}
export interface QueryParams {
    [param: string]: string;
}
export declare type Callback = (result: any, error?: any) => void;
export declare type PromisedCallback = (callback?: Callback) => Promise<any>;
