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
    var acceptedArrays = ['onlyNodeTypes', 'onlyEdgeTypes', 'excludeNodeTypes', 'excludeEdgeTypes'];
    var acceptedInts = ['maxDepth'];
    var options = {};

    acceptedArrays.forEach((arrayParam) => {
      var value = req.query[arrayParam];
      if (value) {
        if (typeof value === 'string') value = value.split(',');
        options[arrayParam] = value;
      }
    });

    acceptedInts.forEach((intParam) => {
      var value = req.query[intParam];
      if (value) {
        if (isNaN(1 * value)) throw new Error(intParam + ' must be a number, but got "' + value + '"');
        options[intParam] = 1 * value;
      }
    });

    res.json({
      graph: itemHelper.fullGraphJson(graph, options)
    });
  };
};
