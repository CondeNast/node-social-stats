"use strict";

var Social = require('../module');

var stats = Social.all('http://www.vogue.com/13368193/jennifer-lawrence-december-2015-cover-hunger-games/');

stats.then(function (d) {
  console.log(d);
}).catch(function (err) {
  console.log(err);
});
