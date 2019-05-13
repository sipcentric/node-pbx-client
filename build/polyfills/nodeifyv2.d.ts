import { Callback } from '../interfaces';
declare function nodeify<T>(promise: Promise<T>, callback: undefined): void;
declare function nodeify<T>(promise: Promise<T>, callback: Callback): Promise<T>;
export default nodeify;
