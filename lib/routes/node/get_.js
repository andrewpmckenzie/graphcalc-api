var routeHelper = require('../../helpers/route');

/**
 * @api {get} /node/ type index
 * @apiName TypeIndex
 * @apiGroup Node
 * @apiVersion v1.0.0
 * @apiDescription
 * A listing of the available node types.
 *
 * @apiUse NodeTypeIndexResponse
 */
module.exports = function (graph) {
  return function (req, res) {
    res.json({
      routes: routeHelper.nodeTypeRoutes(graph)
    });
  };
};
