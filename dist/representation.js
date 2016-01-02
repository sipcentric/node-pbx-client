'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var extend = require('deep-extend');

var Representation = (function () {
  function Representation(client) {
    _classCallCheck(this, Representation);

    this.client = client;
  }

  _createClass(Representation, [{
    key: 'save',
    value: function save(callback) {
      var _this = this;

      var type = this.type;

      var requestCallback = function requestCallback(err, data, response) {

        if (!callback) {
          return;
        }

        if (err) {
          callback(err, data, response);
          return;
        }

        // Update our object with the newly returned propreties
        extend(_this, data);

        // Pass our newly updated object to the callback
        callback(null, _this, response);
      };

      if (this.id) {

        this.client._request('put', type, this.id, this, requestCallback);
      } else {

        this.client._request('post', type, this, requestCallback);
      }
    }
  }, {
    key: 'delete',
    value: function _delete(callback) {

      var type = this.type;

      this.client._request('delete', type, this.id, function handleDeleteResponse(err, data, response) {

        if (!callback) {
          return;
        }

        if (err) {
          callback(err, response);
          return;
        }

        callback(null, response);
      });
    }
  }]);

  return Representation;
})();

module.exports = Representation;