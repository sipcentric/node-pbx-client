import CustomerList from './customerList';
import Representation from './representation';
import { NimveloClient, ClientOptions, RepresentationTypeParams, ApiItem, RepresentationBase, Callback, QueryParams, FormattedApiList, ApiList } from '../interfaces';
declare class Nimvelo implements NimveloClient {
    readonly VERSION: string;
    readonly userAgent: string;
    options: ClientOptions;
    authorization: string;
    authPromise: Promise<any>;
    rateLimit: {
        limit: number;
        remaining: number;
        reset: number;
    };
    customers: CustomerList;
    stream: any;
    presenceWatcher: any;
    static WebRTC: (passedConfig: import("../interfaces").WebRTCConfig, modules: {
        [k: string]: any;
    }) => import("../interfaces").IWebRTC;
    constructor(options?: Partial<ClientOptions>);
    private static _getAuthHeader;
    private static _authenticate;
    private getHeaders;
    init: (options?: Partial<ClientOptions>) => Promise<any>;
    representationFromJson: (json: ApiItem) => Representation;
    _updateRateLimits: (response: Response) => void;
    _pathForType: (type: string, id?: string) => string;
    _paramsForType: (type: string) => RepresentationTypeParams;
    _objectFromItem: (item: ApiItem, parent: string | RepresentationBase) => Representation;
    _buildObjects: (items: ApiItem | ApiItem[], parent: string | RepresentationBase) => Representation | Representation[];
    _request: (method: string, url: string, params?: {}, callback?: Callback) => Promise<{
        parsedData: ApiItem;
        response: Response;
    }>;
    _buildUrl: (type: string, object: RepresentationBase, ...args: any[]) => string;
    _buildUrlSection: (type: string, object: RepresentationBase, url?: string) => string;
    _paramsToQueryString: (params: string | QueryParams) => string;
    _formatGetResponse: (response: ApiItem | ApiList<ApiItem>, parent: string | RepresentationBase) => Representation | Representation[] | {
        meta: FormattedApiList;
        items: Representation | Representation[];
    };
    _getResource: (type: string, object: RepresentationBase, ...args: any[]) => Promise<Representation | Representation[] | {
        meta: FormattedApiList;
        items: Representation | Representation[];
    }>;
    _saveRepresentation: (object: Representation, callback: Callback) => Promise<{
        _response: Response;
        type: string;
        id: string;
        parent?: string;
    }>;
    _deleteRepresentation: (object: Representation, callback: Callback) => Promise<{
        _response: Response;
        type: string;
        id: string;
        parent?: string;
    }>;
}
export default Nimvelo;
