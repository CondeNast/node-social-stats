"use strict"

var fs = require('fs');
var request = require('request-promise');

var Social = {
  all: function(url) {
    var sources = [
      'facebook',
      'linkedin',
      'pinterest',
      'twitter'
    ];

    var self = this;

    var output = sources.map(function (source) {
      return self.get(source, url)
    })

    return Promise.all(output);
  },

  get: function(source, url) {
    source = require('./sources/' + source)

    var getResponse = function (response) {
      return response.body;
    }

    return request.get(source.url.replace('%%URL%%', url))
      .then(function (response) {
        response = source.map(response);
        response.service = source.source;

        return new Promise(function (respond, reject) {
          respond(response);
        });
      }).catch(function (err) {
        return new Promise(function (respond, reject) {
          respond({});
        });
      });
  }
}

module.exports = Social;
