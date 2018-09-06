var service = require('../Services/userService');
var bcrypt = require('bcrypt');
var cloudinary = require('../Config/cloudinary');

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
                verified: false,
                password: hash,
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
    var option = req.params.id;
    return service.deleteUser(req, res, option);
}

exports.login = function(req, res){
    var data = {
        email: req.body.email,
        password: req.body.password 
    }
    return service.login(req, res, {email: data.email}, data);
}

exports.verify = function(req, res){
    var data = {
        email: req.params.email
    };
    return service.verify(req, res, data);
}
exports.uploadPicture = function(req, res){
    var data = {
        _id: req.body._id,
        profilePicture: req.file.path,
        profilePictureId: ''
    }
    cloudinary.addProfilePicture(data.profilePicture).then((result)=> {
        data.profilePicture = result.secure_url;
        data.profilePictureId = result.ID;
        return service.uploadPicture(req, res, data);
    }, (rejected) => {
        res.json({message: rejected.message});
    });
}

exports.update = function(req, res){
    var id = req.params.id;
    var option = req.body;
    return service.update(req, res, id, option);
}