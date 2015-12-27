var express = require('express');

module.exports = function (graph) {
  var router = express.Router({ mergeParams: true });

  router.get('/', require('./get_')(graph));
  router.use('/:_id_/', require('./_id_')(graph));

  return router;
};
