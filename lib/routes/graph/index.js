var express = require('express');

module.exports = function (graph) {
  var router = express.Router();

  router.get('/', require('./get_')(graph));

  return router;
};
