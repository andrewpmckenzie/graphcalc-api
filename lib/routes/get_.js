var routeHelper = require('../helpers/route');

/**
 * @api {get} / index
 * @apiName RootIndex
 * @apiGroup Root
 * @apiVersion v1.0.0
 * @apiDescription
 * A listing of the available object types.
 *
 * @apiUse RootIndexResponse
 */
module.exports = function (graph) {
  return function (req, res) {
    res.json({
      routes: {
        node: routeHelper.nodeTypeRoutes(graph),
        edge: routeHelper.edgeTypeRoutes(graph)
      }
    });
  };
};
