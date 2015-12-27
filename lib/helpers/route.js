var _ = require('lodash');

module.exports = {
  nodeBaseRoutes: function (graph) {
    var nodeTypes = _.pluck(graph.factory.nodeCollections, 'classType');
    return _.transform(nodeTypes, function (map, type) { map[type] = '/node/' + type + '/' }, {});
  },

  edgeBaseRoutes: function (graph) {
    var edgeTypes = _.pluck(graph.factory.edgeCollections, 'classType');
    return _.transform(edgeTypes, function (map, type) { map[type] = '/edge/' + type + '/' }, {});
  }
};
