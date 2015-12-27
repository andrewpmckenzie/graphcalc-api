var _ = require('lodash');
var itemHelper = require('../../../../helpers/item');
var util = require('util');

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
