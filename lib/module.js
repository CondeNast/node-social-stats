"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _requestPromise = require('request-promise');

var _requestPromise2 = _interopRequireDefault(_requestPromise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var sources = _fs2.default.readdirSync('./sources');

var Social = (function () {
  function Social() {
    _classCallCheck(this, Social);
  }

  _createClass(Social, null, [{
    key: 'all',
    value: function all(url) {
      var self = this;

      var output = sources.map(function (source) {
        return self.get(source, url);
      });

      return Promise.all(output);
    }
  }, {
    key: 'get',
    value: function get(source, url) {
      source = require('./sources/' + source);

      var getResponse = function getResponse(response) {
        return response.body;
      };

      return _requestPromise2.default.get(source.url.replace('%%URL%%', url)).then(function (response) {
        response = source.map(response);
        response.service = source.source;

        return new Promise(function (respond, reject) {
          respond(response);
        });
      });
    }
  }]);

  return Social;
})();

exports.default = Social;