var itemHelper = require('../../../../helpers/item');

/**
 * @api {get} /node/:type/:id details
 * @apiName NodeDetails
 * @apiGroup Node
 * @apiVersion v1.0.0
 * @apiDescription
 * Details about an Node.
 *
 * @apiUse NodeDetailsResponse
 * @apiUse NodeJson
 */
module.exports = function (graph) {
  return function (req, res) {
    var type = req.params._type_;
    var id = req.params._id_;

    res.json({
      node: itemHelper.nodeJson(graph, type, id)
    });
  };
};
