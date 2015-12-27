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

  describe('/edge/:TYPE/:ID/', function () {
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

  describe('/node/:TYPE/:ID/', function () {
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
