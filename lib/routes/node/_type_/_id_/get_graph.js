var itemHelper = require('../../../../helpers/item');

module.exports = function (graph) {
  return function (req, res) {
    var type = req.params._type_;
    var id = req.params._id_;

    res.json({
      graph: itemHelper.nodeGraphJson(graph, type, id)
    });
  };
};
