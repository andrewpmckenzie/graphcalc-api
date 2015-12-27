var routeHelper = require('../../helpers/route');

module.exports = function (graph) {
  return function (req, res) {
    var type = req.params.TYPE;

    res.json({
      routes: routeHelper.nodeItemRoutes(graph, type)
    });
  };
};
