'use strict';

module.exports = {
  source: 'facebook',
  url: 'https://api.facebook.com/method/links.getStats?urls=%%URL%%&format=json',
  map: function map(response) {
    response = JSON.parse(response);
    response = response[0];

    return {
      likes: response.like_count,
      shares: response.share_count,
      clicks: response.click_count,
      comments: response.comment_count
    };
  }
};