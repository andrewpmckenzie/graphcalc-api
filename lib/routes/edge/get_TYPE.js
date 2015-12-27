var routeHelper = require('../../helpers/route');

module.exports = function (graph) {
  return function (req, res) {
    var type = req.params.TYPE;

    res.json({
      routes: routeHelper.edgeItemRoutes(graph, type)
    });
  };
};
