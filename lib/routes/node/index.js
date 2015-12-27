var express = require('express');

module.exports = function (graph) {
  var app = express();

  app.get('/', require('./get_')(graph));

  return app;
};
