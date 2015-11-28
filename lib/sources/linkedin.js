'use strict';

module.exports = {
  source: 'linkedin',
  url: 'http://www.linkedin.com/countserv/count/share?url=%%URL%%&format=json',
  map: function map(response) {
    response = JSON.parse(response);

    return {
      shares: response.count
    };
  }
};