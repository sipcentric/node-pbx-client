'use strict'

/*
  Thanks go to Brian Mancini for this polyfill of Q's 'nodeify' method
  http://derpturkey.com/promise-callback-pattern-for-javascript/
*/

;
module.exports = function (callback) {

  if (callback) {

    this.then(function (value) {

      setTimeout(function () {
        callback(null, value);
      }, 0);
    }, function (error) {

      setTimeout(function () {
        callback(error);
      }, 0);
    });
  } else {

    return this;
  }
};