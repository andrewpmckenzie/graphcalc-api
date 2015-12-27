var _ = require('lodash');
var Serializer = require('graph-calc').Serializer;

module.exports = {
  edgeJson: (graph, type, id) => graph.factory.getEdge(type, id).toJson(),
  nodeJson: (graph, type, id) => graph.factory.getNode(type, id).toJson(),
  fullGraphJson: (graph) => new Serializer().serialize(graph)
};
