var service = require('../Services/trailerCommentService');

exports.add = function(req, res){
    data = {
        time: Date.now(),
        content: req.body.content,
        rating: req.body.rating,
        user: req.body.user,
        trailer: req.params.trailer,
    }
    return service.addPopulate(req, res, data);
}

exports.getComments = function(req, res){
    var data = {trailer : req.params.trailer}
    return service.search(req, res, data);
}

exports.delete = function(req, res){
    var option = req.params.id;
    return service.delete(req, res, option);
}
