var itemHelper = require('../../helpers/item');

module.exports = function (graph) {
  return function (req, res) {
    res.json({
      graph: itemHelper.fullGraphJson(graph)
    });
  };
};
