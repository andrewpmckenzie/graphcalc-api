var routeHelper = require('../../helpers/route');

module.exports = function (graph) {
  return function (req, res) {
    res.json({
      routes: routeHelper.edgeBaseRoutes(graph)
    });
  };
};
