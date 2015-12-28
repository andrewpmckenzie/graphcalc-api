var routeHelper = require('../../../helpers/route');

/**
 * @api {get} /edge/:type index
 * @apiName EdgeIndex
 * @apiGroup Edge
 * @apiVersion v1.0.0
 * @apiDescription
 * A listing of the edges of a given type.
 *
 * @apiUse EdgeIndexResponse
 */
module.exports = function (graph) {
  return function (req, res) {
    var type = req.params._type_;

    res.json({
      routes: routeHelper.edgeItemRoutes(graph, type)
    });
  };
};
