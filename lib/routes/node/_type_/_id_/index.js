var express = require('express');

module.exports = function (graph) {
  var router = express.Router({ mergeParams: true });

  router.get('/', require('./get_')(graph));
  router.get('/graph', require('./get_graph')(graph));

  return router;
};
