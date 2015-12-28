var _ = require('lodash');
var itemHelper = require('../../../../helpers/item');
var util = require('util');

/**
 * @api {get} /node/:type/:id/graph graph
 * @apiName NodeGraph
 * @apiGroup Node
 * @apiVersion v1.0.0
 * @apiDescription
 * A graph constructed by traversing from the given node.
 *
 * @apiParam {NodeType[]} onlyNodeTypes limit the Graph (and discovery) to these Node types.
 * @apiParam {EdgeType[]} onlyEdgeTypes limit the Graph (and discovery) to these Edge types.
 * @apiParam {NodeType[]} excludeNodeTypes ignore these Node types.
 * @apiParam {EdgeType[]} excludeEdgeTypes ignore these Edge types.
 * @apiParam {Number} maxDepth ignore nodes/edges beyond this distance from the anchor node.
 * @apiUse NodeGraphResponse
 * @apiUse NodeJson
 * @apiUse EdgeJson
 */
module.exports = function (graph) {
  return function (req, res) {
    var type = req.params._type_;
    var id = req.params._id_;

    var acceptedArrays = ['onlyNodeTypes', 'onlyEdgeTypes', 'excludeNodeTypes', 'excludeEdgeTypes'];
    var acceptedInts = ['maxDepth'];
    var options = {};

    acceptedArrays.forEach((arrayParam) => {
      var value = req.query[arrayParam];
      if (value) {
        if (typeof value === 'string') value = [value];
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
      graph: itemHelper.nodeGraphJson(graph, type, id, options)
    });
  };
};
