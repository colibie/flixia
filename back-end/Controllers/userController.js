var service = require('../Services/userService');

exports.createAccount = function(req, res){
    data = {
        userName: req.body.userName,
        email: req.body.email,
        password: req.body.password,
        profilePicture: req.file.path,
    }
    return service.createAccount(req, res, data);
}

exports.sendMail = function(req, res){
    return service.sendMail(req, res);
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
