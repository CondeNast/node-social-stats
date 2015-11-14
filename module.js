"use strict"

import fs from 'fs'
import request from 'request-promise'
var sources = fs.readdirSync('./sources')

class Social {
  static all(url) {
    var self = this

    var output = sources.map(function (source) {
      return self.get(source, url)
    })

    return Promise.all(output);
  }

  static get(source, url) {
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
      });
  }
}

export default Social
