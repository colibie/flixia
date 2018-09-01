//Retrieves and serves data for usage
var service = require('../Services/celebrityService');
var cloudinary = require('../Config/cloudinary');

exports.add = function(req, res){
    data = {
        name: req.body.name,
        biography: req.body.biography,
        dateOfBirth: req.body.dateOfBirth,//stands for date of birth
        picture : req.file.path,
        pictureId: '', 
        roles: req.body.roles,
    }
    cloudinary.addCelebrityPicture(data.picture).then((result)=> {
        data.picture = result.url;
        data.pictureId = result.ID;        
        return service.addPopulate(req, res, data);
    }, (rejected) => {
        res.json({message: rejected.message});
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

exports.searchByName = function(req, res){
    var option = req.params.name;
    var data = {name: {$regex: option, $options: 'i'}};
    return service.searchByName(req, res, data);
}

exports.delete = function(req, res){
    var option = req.params.id;
    return service.delete(req, res, option);
}
