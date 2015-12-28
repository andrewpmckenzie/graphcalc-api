var itemHelper = require('../../helpers/item');

/**
 * @api {get} /graph graph
 * @apiName FullGraph
 * @apiGroup Root
 * @apiVersion v1.0.0
 * @apiDescription
 * The full graph.
 *
 * @apiUse GraphResponse
 * @apiUse NodeJson
 * @apiUse EdgeJson
 */
module.exports = function (graph) {
  return function (req, res) {
    res.json({
      graph: itemHelper.fullGraphJson(graph)
    });
  };
};
