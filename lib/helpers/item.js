var _ = require('lodash');
var Serializer = require('graph-calc').Serializer;
var Traverser = require('graph-calc').Traverser;

module.exports = {
  edgeJson: (graph, type, id) => graph.factory.getEdge(type, id).toJson(),
  nodeJson: (graph, type, id) => graph.factory.getNode(type, id).toJson(),
  fullGraphJson: (graph) => new Serializer().serialize(graph),
  nodeGraphJson: (graph, type, id) => {
    var node = graph.factory.getNode(type, id);
    var traverser = new Traverser();
    return traverser.traverse(node).json;
  }
};
