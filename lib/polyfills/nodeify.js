/*
  Thanks go to Brian Mancini for this polyfill of Q's 'nodeify' method
  http://derpturkey.com/promise-callback-pattern-for-javascript/
*/

// eslint-disable-next-line consistent-return
const nodeify = function nodeify(callback) {
  if (callback) {
    this.then(
      (value) => {
        setTimeout(() => {
          callback(null, value);
        }, 0);
      },
      (error) => {
        setTimeout(() => {
          callback(error);
        }, 0);
      },
    );
  } else {
    return this;
  }
};

export default nodeify;
