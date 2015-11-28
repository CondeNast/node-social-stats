'use strict';

module.exports = {
  source: 'twitter',
  url: 'http://urls.api.twitter.com/1/urls/count.json?url=%%URL%%',
  map: function map(response) {
    response = JSON.parse(response);

    return {
      shares: response.count
    };
  }
};