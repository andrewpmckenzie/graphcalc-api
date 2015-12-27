var _ = require('lodash');
var format = require('util').format;

var enc = (str) => encodeURIComponent(str);
var nodeTypeRoute = (type) => format('/node/%s/', enc(type));
var edgeTypeRoute = (type) => format('/edge/%s/', enc(type));
var nodeItemRoute = (node) => format('%s%s', nodeTypeRoute(node.type), enc(node.id));
var edgeItemRoute = (edge) => format('%s%s', edgeTypeRoute(edge.type), enc(edge.id));

module.exports = {
  _nodeTypeRoute: nodeTypeRoute,
  _edgeTypeRoute: edgeTypeRoute,
  _nodeItemRoute: nodeItemRoute,
  _edgeItemRoute: edgeItemRoute,

  nodeTypeRoutes: function (graph) {
    var nodeTypes = _.pluck(graph.factory.nodeCollections, 'classType');
    return _.transform(nodeTypes, function (map, type) { map[type] = nodeTypeRoute(type) }, {});
  },

  edgeTypeRoutes: function (graph) {
    var edgeTypes = _.pluck(graph.factory.edgeCollections, 'classType');
    return _.transform(edgeTypes, function (map, type) { map[type] = edgeTypeRoute(type); }, {});
  },

  nodeItemRoutes: function (graph, nodeType) {
    var nodeTypeItems = graph.factory.getNodes(nodeType);
    return _.transform(nodeTypeItems, function (map, node) { map[node.id] = nodeItemRoute(node); }, {});
  },

  edgeItemRoutes: function (graph, edgeType) {
    var edgeTypeItems = graph.factory.getEdges(edgeType);
    return _.transform(edgeTypeItems, function (map, edge) { map[edge.id] = edgeItemRoute(edge); }, {});
  }
};
