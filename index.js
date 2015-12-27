var Server = require('./lib/Server');

module.exports = function (options) {
  return new Server(options).start();
};

module.exports.Server = Server;
