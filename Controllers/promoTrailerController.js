//Retrieves and serves data for usage
var service = require('../Services/promoTrailer');
var cloudinary = require('../Config/cloudinary');

exports.add = function(req, res){
    data = {
        title: req.body.title,
        releaseDate: req.body.releaseDate,
        stringReleaseDate: new Date(req.body.releaseDate),
        trailerId: req.body.trailerId,
        promoCover : req.file.path,
        promoCoverId: '', 
        genre: req.body.genre,
        status: ''
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
    return service.get(req, res);
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

exports.getLatestTrailers = function(req, res){
    try {
        return service.getByRecent(req, res, Number.parseInt(req.query.dateAdded));   
    } catch (exception){
        res.json({error:exception});
    }
}
