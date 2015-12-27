var routeHelper = require('../helpers/route');

module.exports = function (graph) {
  return function (req, res) {
    res.json({
      routes: {
        node: routeHelper.nodeBaseRoutes(graph),
        edge: routeHelper.edgeBaseRoutes(graph)
      }
    });
  };
};
