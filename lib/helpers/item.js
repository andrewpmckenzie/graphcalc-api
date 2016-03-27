var _ = require('lodash');
var Serializer = require('graph-calc').Serializer;
var Traverser = require('graph-calc').Traverser;

module.exports = {
  edgeJson: (graph, type, id) => graph.factory.getEdge(type, id).toJson(),
  nodeJson: (graph, type, id) => graph.factory.getNode(type, id).toJson(),
  fullGraphJson: (graph, options) => new Serializer(options).serialize(graph),
  nodeGraphJson: (graph, type, id, options) => {
    var node = graph.factory.getNode(type, id);
    var traverser = new Traverser(options);
    return traverser.traverse(node).json;
  }
};
