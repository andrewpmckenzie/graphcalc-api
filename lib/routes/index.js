var express = require('express');

module.exports = function (graph) {
  var router = express.Router();

  router.get('/', require('./get_')(graph));

  router.use('/edge/', require('./edge')(graph));
  router.use('/node/', require('./node')(graph));

  return router;
};
