var routeHelper = require('../../../helpers/route');

/**
 * @api {get} /node/:type index
 * @apiName NodeIndex
 * @apiGroup Node
 * @apiVersion v1.0.0
 * @apiDescription
 * A listing of the nodes of a given type.
 *
 * @apiUse NodeIndexResponse
 */
module.exports = function (graph) {
  return function (req, res) {
    var type = req.params._type_;

    res.json({
      routes: routeHelper.nodeItemRoutes(graph, type)
    });
  };
};
