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

});
