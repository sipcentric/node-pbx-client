import { Callback } from '../interfaces';

/*
  Thanks go to Brian Mancini for this polyfill of Q's 'nodeify' method
  http://derpturkey.com/promise-callback-pattern-for-javascript/
*/

// eslint-disable-next-line consistent-return
function nodeify<T>(promise: Promise<T>, callback: undefined): void;
function nodeify<T>(promise: Promise<T>, callback: Callback): Promise<T>;
function nodeify<T>(
  promise: Promise<T>,
  callback?: Callback,
): Promise<T> | void {
  if (callback) {
    promise.then((res) => callback(res)).catch((err) => callback(null, err));
    return;
  } else {
    return promise;
  }
}

export default nodeify;
