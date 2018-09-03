//Retrieves and serves data for usage
var service = require('../Services/promoTrailer');
var cloudinary = require('../Config/cloudinary');

exports.add = function(req, res){
    data = {
        title: req.body.title,
        releaseDate: new Date(req.body.releaseDate),
        trailerId: req.body.trailerId,
        promoCover : req.file.path,
        promoCoverId: '', 
        genre: req.body.genre,
    }
    cloudinary.addPromoTrailerPictures(data.promoCover).then((result)=> {
        data.promoCover = result.url;
        data.promoCoverId = result.ID;
        return service.add(req, res, data);
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

exports.searchByTitle = function(req, res){
    var option = req.params.title;
    var data = {title: {$regex: option, $options: 'i'}};
    return service.searchByTitle(req, res, data);
}

exports.update = function(req, res){
    var id = req.params.id;
    var option = req.body;
    return service.update(req, res, id, option);
}

exports.delete = function(req, res){
    var option = req.params.id;
    return service.deleteTrailer(req, res, option);
}
