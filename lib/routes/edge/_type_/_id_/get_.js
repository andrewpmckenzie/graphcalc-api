var itemHelper = require('../../../../helpers/item');

/**
 * @api {get} /edge/:type/:id details
 * @apiName EdgeDetails
 * @apiGroup Edge
 * @apiVersion v1.0.0
 * @apiDescription
 * Details about an Edge.
 *
 * @apiUse EdgeDetailsResponse
 * @apiUse EdgeJson
 */
module.exports = function (graph) {
  return function (req, res) {
    var type = req.params._type_;
    var id = req.params._id_;

    res.json({
      edge: itemHelper.edgeJson(graph, type, id)
    });
  };
};
