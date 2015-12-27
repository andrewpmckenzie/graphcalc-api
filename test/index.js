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


});
