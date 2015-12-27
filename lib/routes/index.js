var express = require('express');

module.exports = function (graph) {
  var app = express();

  app.get('/', require('./get_')(graph));

  app.use('/edge/', require('./edge')(graph));
  app.use('/node/', require('./node')(graph));

  return app;
};