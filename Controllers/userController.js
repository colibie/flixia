var service = require('../Services/userService');

exports.add = function(req, res){
    data = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        profilePicture: req.file.path,
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
    var option = {_id: req.params.id};
    return service.delete(req, res, option);
}
