
var build = function() {
  return require('./build');
}

var client = function() {
  return require('./client');
}

module.exports = {
  build: build(),
  client: client()
};

