'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var extend = require('deep-extend');

var Representation = (function () {
  function Representation(client, properties, parent) {
    _classCallCheck(this, Representation);

    this.client = client;
    extend(this, properties);
    this.parent = parent;
  }

  _createClass(Representation, [{
    key: 'save',
    value: function save(callback) {
      var _this = this;

      if (this.id) {

        return new Promise(function (resolve, reject) {

          _this.client._request('put', _this.type, _this.customerId, _this.id, _this).then(function (data) {

            // Update our object with the newly returned propreties
            extend(_this, data);

            resolve(data);
          }, function (error) {

            reject(error);
          });
        }).nodeify(callback);
      } else {

        return new Promise(function (resolve, reject) {

          _this.client._request('post', _this.type, _this.customerId, _this).then(function (data) {

            // Update our object with the newly returned propreties
            extend(_this, data);

            resolve(data);
          }, function (error) {

            reject(error);
          });
        }).nodeify(callback);
      }
    }
  }, {
    key: 'delete',
    value: function _delete(callback) {
      var _this2 = this;

      var type = this.type;

      return new Promise(function (resolve, reject) {

        _this2.client._request('delete', type, _this2.customerId, _this2.id).then(function () {

          resolve();
        }, function (error) {

          reject(error);
        });
      }).nodeify(callback);
    }
  }]);

  return Representation;
})();

module.exports = Representation;