var routeHelper = require('../../helpers/route');

/**
 * @api {get} /edge/ type index
 * @apiName TypeIndex
 * @apiGroup Edge
 * @apiVersion v1.0.0
 * @apiDescription
 * A listing of the available edge types.
 *
 * @apiUse EdgeTypeIndexResponse
 */
module.exports = function (graph) {
  return function (req, res) {
    res.json({
      routes: routeHelper.edgeTypeRoutes(graph)
    });
  };
};
