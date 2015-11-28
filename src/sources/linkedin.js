module.exports = {
  source: 'linkedin',
  url: 'http://www.linkedin.com/countserv/count/share?url=%%URL%%&format=json',
  map:  function (response) {
    response = JSON.parse(response);

    return {
      shares: response.count
    }
  }
}
