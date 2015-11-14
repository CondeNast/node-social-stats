module.exports = {
  source: 'pinterest',
  url: 'http://widgets.pinterest.com/v1/urls/count.json?source=6&url=%%URL%%',
  map:  function (response) {
    var r = response.replace('receiveCount(', '').replace('})', '}');
    r = JSON.parse(r);

    return {
      shares: r.count
    }
  }
}
