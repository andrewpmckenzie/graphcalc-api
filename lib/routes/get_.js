var _ = require('lodash');

module.exports = function (graph) {

  var nodeTypes = _.pluck(graph.factory.nodeCollections, 'classType');
  var edgeTypes = _.pluck(graph.factory.edgeCollections, 'classType');

  return function (req, res) {
    res.json({
      nodes: _.transform(nodeTypes, function (map, type) { map[type] = '/node/' + type + '/' }, {}),
      edges: _.transform(edgeTypes, function (map, type) { map[type] = '/edge/' + type + '/' }, {})
    });
  };
};
