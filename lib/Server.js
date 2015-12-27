var _ = require('lodash');
var bodyParser = require('body-parser');
var express = require('express');
var routes = require('./routes');

var Server = function (options) {
  this.port = options.port || 0;
  this.graph = options.graph;

  this.app = express();
  this.server = null;

  this._setupMiddleware();
  this._setupRoutes();
};

Server.prototype.start = function (cb) {
  this.server = this.app.listen(this.port, this._onStarted.bind(this, cb));
  return this;
};

Server.prototype._setupMiddleware = function () {
  this.app.use(bodyParser.json());
};

Server.prototype._setupRoutes = function () {
  this.app.use('/', require('./routes')(this.graph));

  this.app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

  this.app.use(function (err, req, res, next) {
    res.status(err.status === 404 ? 404 : 500).send({
      error: err.message,
      stack: err.stack
    });
  }.bind(this));
};

Server.prototype._onStarted = function (cb) {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Started listening on http://%s:%s', host, port);

  cb();
};

module.exports = Server;
