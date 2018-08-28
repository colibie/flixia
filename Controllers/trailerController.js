var service = require('../Services/trailerService');
var cloudinary = require('../Config/cloudinary');

exports.add = function(req, res){
    data = {
        title: req.body.title,
        description: req.body.description,
        rating: req.body.rating,
        year: req.body.year,
        productionCompany: req.body.productionCompany,
        duration: req.body.duration,
        category: req.body.category,
        trailerCover: req.files[0].path,
        // trailerCoverId : '',
        trailerVideo: req.files[1].path,
        // trailerVideoId: ''
    }
    cloudinary.addTrailerCover(data.trailerCover).then((result)=> {
        data.trailerCover = result.url;
        data.trailerCoverId = result.ID;
        cloudinary.addTrailerVideo(data.trailerVideo).then((result)=> {
            data.trailerVideo = result.url;
            data.trailerVideoId = result.ID;
            
            return service.add(req, res, data);
        }, (rejected) => {
            res.json({message: rejected.message});
        });
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

exports.delete = function(req, res){
    var option = req.params.id;
    return service.deleteTrailer(req, res, option);
}
