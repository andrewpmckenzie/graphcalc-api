module.exports = function (graph, app) {
  app.get('/', require('./get_')(graph));
};
