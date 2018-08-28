var service = require('../Services/trailerCommentService');

exports.add = function(req, res){
    data = {
        time: Date.now(),
        content: req.body.content,
        rating: req.body.rating,
        trailer: req.body.trailer,
    }
    return service.addPopulate(req, res, data);
}

exports.getAll = function(req, res){
    return service.getAll(req, res);
}

exports.delete = function(req, res){
    var option = req.params.id;
    return service.delete(req, res, option);
}
