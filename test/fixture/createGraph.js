module.exports = function () {
  var TestGraph = require('graph-calc/test/_SchoolGraph')();
  var graph = new TestGraph.SchoolGraph();

  graph.factory.createOrUpdateEdge('teaches', { teacher: { id: 'Sue' }, class: { id: 'Chemistry' } });
  graph.factory.createOrUpdateEdge('taughtBy', { teacher: { id: 'Sue' }, class: { id: 'Chemistry' } });
  graph.factory.createOrUpdateEdge('attends', { student: { id: 'Bobby' }, class: { id: 'Chemistry' } });
  graph.factory.createOrUpdateEdge('attendedBy', { student: { id: 'Bobby' }, class: { id: 'Chemistry' } });
  graph.factory.createOrUpdateEdge('attends', { student: { id: 'Max' }, class: { id: 'Chemistry' } });
  graph.factory.createOrUpdateEdge('attendedBy', { student: { id: 'Max' }, class: { id: 'Chemistry' } });
  graph.factory.createOrUpdateEdge('teaches', { teacher: { id: 'Sam' }, class: { id: 'Biology' } });
  graph.factory.createOrUpdateEdge('taughtBy', { teacher: { id: 'Sam' }, class: { id: 'Biology' } });
  graph.factory.createOrUpdateEdge('studentRepOf', { student: { id: 'Max' }, department: { id: 'Science' } });
  graph.factory.createOrUpdateEdge('headOf', { teacher: { id: 'Sam' }, department: { id: 'Science' } });
  graph.factory.createOrUpdateEdge('provides', { class: { id: 'Chemistry' }, department: { id: 'Science' } });
  graph.factory.createOrUpdateEdge('providedBy', { class: { id: 'Chemistry' }, department: { id: 'Science' } });
  graph.factory.createOrUpdateEdge('provides', { class: { id: 'Biology' }, department: { id: 'Science' } });
  graph.factory.createOrUpdateEdge('providedBy', { class: { id: 'Biology' }, department: { id: 'Science' } });

  return graph;
};
