var express = require('express');
var routes = require('./routes');

var Server = function (options) {
  this.port = options.port || 0;
  this.graph = options.graph;

  this.app = express();
  this.server = null;

  this._setupRoutes();
};

Server.prototype.start = function (cb) {
  this.server = this.app.listen(this.port, this._onStarted.bind(this, cb));
  return this;
};

Server.prototype._setupRoutes = function () {
  this.app.use('/', require('./routes')(this.graph));
};

Server.prototype._onStarted = function (cb) {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Started listening on http://%s:%s', host, port);

  cb();
};

module.exports = Server;
