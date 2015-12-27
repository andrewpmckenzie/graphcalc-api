var express = require('express');

module.exports = function (graph) {
  var app = express();

  app.get('/', require('./get_')(graph));
  app.get('/:TYPE', require('./get_TYPE')(graph));

  return app;
};
