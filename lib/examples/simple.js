"use strict";

var _module = require('../module');

var _module2 = _interopRequireDefault(_module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stats = _module2.default.all('http://www.vogue.com/13368193/jennifer-lawrence-december-2015-cover-hunger-games/');

console.log("THIS FIN");
stats.then(function (d) {
  console.log("THIS FAR");
  console.log(d);
});
