var _ = require('lodash');

module.exports = {
  nodeTypeRoutes: function (graph) {
    var nodeTypes = _.pluck(graph.factory.nodeCollections, 'classType');
    return _.transform(nodeTypes, function (map, type) { map[type] = '/node/' + type + '/' }, {});
  },

  edgeTypeRoutes: function (graph) {
    var edgeTypes = _.pluck(graph.factory.edgeCollections, 'classType');
    return _.transform(edgeTypes, function (map, type) { map[type] = '/edge/' + type + '/' }, {});
  },

  edgeItemRoutes: function (graph, edgeType) {
    var baseRoute = '/edge/' + edgeType;
    var edgeTypeItems = graph.factory.getEdges(edgeType);
    return _.transform(edgeTypeItems, function (map, edge) { map[edge.id] = baseRoute + '/' + edge.id; }, {});
  },

  nodeItemRoutes: function (graph, nodeType) {
    var baseRoute = '/node/' + nodeType;
    var nodeTypeItems = graph.factory.getNodes(nodeType);
    return _.transform(nodeTypeItems, function (map, node) { map[node.id] = baseRoute + '/' + node.id; }, {});
  }
};
