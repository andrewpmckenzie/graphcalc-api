var _ = require('lodash');

module.exports = {
  edgeJson: (graph, type, id) => graph.factory.getEdge(type, id).toJson(),
  nodeJson: (graph, type, id) => graph.factory.getNode(type, id).toJson()
};
