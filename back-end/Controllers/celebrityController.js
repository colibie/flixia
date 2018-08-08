//Retrieves and serves data for usage
var service = require('../Services/celebrityService');

exports.add = function(req, res){
    data = {
        name: req.body.name,
        biography: req.body.biography,
        dob: req.body.dob, //stands for date of birth
        //movieIndustryRole: req.body.movieIndustryRole,
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
