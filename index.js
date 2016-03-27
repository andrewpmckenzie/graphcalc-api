var Server = require('./lib/Server');

module.exports = function (options) { return new Server(options).start(); };
module.exports.middleware = function (options) { return new Server(options).app; };
module.exports.Server = Server;
