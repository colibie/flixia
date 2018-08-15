var service = require('../Services/userService');
var bcrypt = require('bcrypt');

exports.sendMail = function(req, res){
    return service.sendMail(req, res);
}

exports.createAccount = function(req, res){
    bcrypt.hash(req.body.password, 10, function(err, hash){
        if(err) {
            return res.status(500).json({error: err});
        }else{
            var data = {
                username: req.body.username,
                email: req.body.email,
                password: hash,
                // profilePicture: req.file.path,
            }
            return service.createAccount(req, res, data);
        }        
    });
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

// exports.login = function(req, res){
//     var data = {
//         userName: req.body.userName,
//         email: req.body.email,
//         password: req.body.password 
//     }
//     return service.login(req, res, {email: data.email}, data);
// }

