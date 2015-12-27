var assert = require('chai').assert;
var mockRequest = require('supertest');

describe('graphcalc-api', function () {
  var GraphCalcServer = require('..').Server;
  var TestGraph = require('./fixture');

  describe('/', function () {
    it('lists node and edge routes.', function (done) {
      var server = new GraphCalcServer({ graph: TestGraph.createGraph() });

      mockRequest(server.app)
        .get('/')
        .expect(200, {
          routes: {
            node: {
              'department': '/node/department/',
              'teacher': '/node/teacher/',
              'class': '/node/class/',
              'student': '/node/student/'
            },
            edge: {
              'teaches': '/edge/teaches/',
              'taughtBy': '/edge/taughtBy/',
              'attends': '/edge/attends/',
              'attendedBy': '/edge/attendedBy/',
              'headOf': '/edge/headOf/',
              'studentRepOf': '/edge/studentRepOf/',
              'providedBy': '/edge/providedBy/',
              'provides': '/edge/provides/'
            }
          }
        }, done);
    });
  });

  describe('/edge/', function () {
    it('lists edge routes.', function (done) {
      var server = new GraphCalcServer({ graph: TestGraph.createGraph() });

      mockRequest(server.app)
        .get('/edge/')
        .expect(200, {
          routes: {
            'teaches': '/edge/teaches/',
            'taughtBy': '/edge/taughtBy/',
            'attends': '/edge/attends/',
            'attendedBy': '/edge/attendedBy/',
            'headOf': '/edge/headOf/',
            'studentRepOf': '/edge/studentRepOf/',
            'providedBy': '/edge/providedBy/',
            'provides': '/edge/provides/'
          }
        }, done);
    });
  });

  describe('/edge/:TYPE/', function () {
    it('lists edge type routes.', function (done) {
      var server = new GraphCalcServer({ graph: TestGraph.createGraph() });

      mockRequest(server.app)
        .get('/edge/teaches/')
        .expect(200, {
          routes: {
            'teaches-Sue-Chemistry': '/edge/teaches/teaches-Sue-Chemistry',
            'teaches-Sam-Biology': '/edge/teaches/teaches-Sam-Biology'
          }
        }, done);
    });
  });

  describe('/edge/:TYPE/:ID', function () {
    it('provides edge details.', function (done) {
      var server = new GraphCalcServer({ graph: TestGraph.createGraph() });

      mockRequest(server.app)
        .get('/edge/teaches/teaches-Sue-Chemistry')
        .expect(200, {
          edge: {
            'id': 'teaches-Sue-Chemistry',
            'name': 'teaches-Sue-Chemistry',
            'type': 'teaches',
            'from': 'teacher-Sue',
            'to': 'class-Chemistry'
          }
        }, done);
    });
  });

  describe('/node/', function () {
    it('lists node routes.', function (done) {
      var server = new GraphCalcServer({ graph: TestGraph.createGraph() });

      mockRequest(server.app)
        .get('/node/')
        .expect(200, {
          routes: {
            'department': '/node/department/',
            'teacher': '/node/teacher/',
            'class': '/node/class/',
            'student': '/node/student/'
          }
        }, done);
    });
  });

  describe('/node/:TYPE/', function () {
    it('lists node type routes.', function (done) {
      var server = new GraphCalcServer({ graph: TestGraph.createGraph() });

      mockRequest(server.app)
        .get('/node/teacher/')
        .expect(200, {
          routes: {
            'teacher-Sue': '/node/teacher/teacher-Sue',
            'teacher-Sam': '/node/teacher/teacher-Sam'
          }
        }, done);
    });
  });

  describe('/node/:TYPE/:ID', function () {
    it('provides node details.', function (done) {
      var server = new GraphCalcServer({ graph: TestGraph.createGraph() });

      mockRequest(server.app)
        .get('/node/teacher/teacher-Sue')
        .expect(200, {
          node: {
            'id': 'teacher-Sue',
            'name': 'teacher-Sue',
            'type': 'teacher'
          }
        }, done);
    });
  });

  describe('/graph', function () {
    it('provides the full graph.', function (done) {
      var server = new GraphCalcServer({ graph: TestGraph.createGraph() });

      mockRequest(server.app)
        .get('/graph/')
        .expect({
          graph: {
            edges: [
              { id: 'teaches-Sue-Chemistry', name: 'teaches-Sue-Chemistry', type: 'teaches', from: 'teacher-Sue', to: 'class-Chemistry' },
              { id: 'teaches-Sam-Biology', name: 'teaches-Sam-Biology', type: 'teaches', from: 'teacher-Sam', to: 'class-Biology' },
              { id: 'taughtBy-Chemistry-Sue', name: 'taughtBy-Chemistry-Sue', type: 'taughtBy', from: 'class-Chemistry', to: 'teacher-Sue' },
              { id: 'taughtBy-Biology-Sam', name: 'taughtBy-Biology-Sam', type: 'taughtBy', from: 'class-Biology', to: 'teacher-Sam' },
              { id: 'attends-Bobby-Chemistry', name: 'attends-Bobby-Chemistry', type: 'attends', from: 'student-Bobby', to: 'class-Chemistry' },
              { id: 'attends-Max-Chemistry', name: 'attends-Max-Chemistry', type: 'attends', from: 'student-Max', to: 'class-Chemistry' },
              { id: 'attendedBy-Chemistry-Bobby', name: 'attendedBy-Chemistry-Bobby', type: 'attendedBy', from: 'class-Chemistry', to: 'student-Bobby' },
              { id: 'attendedBy-Chemistry-Max', name: 'attendedBy-Chemistry-Max', type: 'attendedBy', from: 'class-Chemistry', to: 'student-Max' },
              { id: 'headOf-Sam-Science', name: 'headOf-Sam-Science', type: 'headOf', from: 'teacher-Sam', to: 'department-Science' },
              { id: 'studentRepOf-Max-Science', name: 'studentRepOf-Max-Science', type: 'studentRepOf', from: 'student-Max', to: 'department-Science' },
              { id: 'providedBy-Chemistry-Science', name: 'providedBy-Chemistry-Science', type: 'providedBy', from: 'class-Chemistry', to: 'department-Science' },
              { id: 'providedBy-Biology-Science', name: 'providedBy-Biology-Science', type: 'providedBy', from: 'class-Biology', to: 'department-Science' },
              { id: 'provides-Science-Chemistry', name: 'provides-Science-Chemistry', type: 'provides', from: 'department-Science', to: 'class-Chemistry' },
              { id: 'provides-Science-Biology', name: 'provides-Science-Biology', type: 'provides', from: 'department-Science', to: 'class-Biology' }
            ],
            nodes: [
              { id: 'department-Science', name: 'department-Science', type: 'department' },
              { id: 'teacher-Sue', name: 'teacher-Sue', type: 'teacher' },
              { id: 'teacher-Sam', name: 'teacher-Sam', type: 'teacher' },
              { id: 'class-Chemistry', name: 'class-Chemistry', type: 'class' },
              { id: 'class-Biology', name: 'class-Biology', type: 'class' },
              { id: 'student-Bobby', name: 'student-Bobby', type: 'student' },
              { id: 'student-Max', name: 'student-Max', type: 'student' }
            ]
          }
        }, done);
    });
  });

  describe('helper.route', function () {
    it('properly encodes URI components', function () {
      var routeHelper = require('../lib/helpers/route');
      assert.equal(routeHelper._nodeTypeRoute('foo/bar'), '/node/foo%2Fbar/');
      assert.equal(routeHelper._edgeTypeRoute('foo/bar'), '/edge/foo%2Fbar/');
      assert.equal(routeHelper._nodeItemRoute({ id: 'f?b', type: 'foo/bar' }), '/node/foo%2Fbar/f%3Fb');
      assert.equal(routeHelper._edgeItemRoute({ id: 'f?b', type: 'foo/bar' }), '/edge/foo%2Fbar/f%3Fb');
    });
  });
});
