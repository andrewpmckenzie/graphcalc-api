var express = require('express');

module.exports = function (graph) {
  var router = express.Router();

  router.get('/', require('./get_')(graph));

  router.use('/:_type_/', require('./_type_')(graph));

  return router;
};
