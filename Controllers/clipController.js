var service = require('../Services/clipService');

exports.add = function(req, res){
    data = {
        title: req.body.title,
        description: req.body.description,
        rating: req.body.rating,
        time: Date.now(),
        user: req.body.user,
        clipComment: req.body.clipComment,
        clipContent: req.file.path
    }
    return service.add(req, res, data);
}

exports.getAll = function(req, res){
    return service.getAll(req, res);
}

exports.getById = function(req, res){
    var id = req.params.id;
    return service.getById(req, res, id);
}

exports.search = function(req, res){
    var option = req.query;
    return service.search(req, res, option);
}

exports.delete = function(req, res){
    var option = req.params.id;
    return service.delete(req, res, option);
}
