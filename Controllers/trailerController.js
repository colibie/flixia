var service = require('../Services/trailerService');
var cloudinary = require('../Config/cloudinary');

exports.add = function(req, res){
    data = {
        title: req.body.title,
        description: req.body.description,
        rating: req.body.rating,
        releaseDate: req.body.releaseDate, //YearMonthDate
        productionCompany: req.body.productionCompany,
        duration: req.body.duration,
        language: req.body.language,
        filmingLocations: req.body.filmingLocations,
        budget: req.body.budget,    
        officialSite: req.body.officialSite,
        categories: req.body.categories,
        trailerCover: req.files[0].path,
        trailerCoverId : '',
        trailerVideo: req.files[1].path,
        trailerVideoId: '',
        casts: req.body.casts,
        castActedAs: req.body.castActedAs
    }
    cloudinary.addTrailerCover(data.trailerCover).then((result)=> {
        data.trailerCover = result.secure_url;
        data.trailerCoverId = result.ID;
        cloudinary.addTrailerVideo(data.trailerVideo).then((result)=> {
            data.trailerVideo = result.secure_url;
            data.trailerVideoId = result.ID;
            
            return service.addPopulate(req, res, data);
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
    // var key = Object.keys(option).toString();
    // var value = option[Object.keys(option).toString()]
    return service.search(req, res, option);
}

exports.searchByTitle = function(req, res){
    var option = req.params.title;
    var data = {title: {$regex: option, $options: 'i'}};
    return service.searchByTitle(req, res, data);
}

exports.delete = function(req, res){
    var option = req.params.id;
    return service.deleteTrailer(req, res, option);
}

exports.update = function(req, res){
    var id = req.params.id;
    var option = req.body;
    return service.updateTrailer(req, res, id, option);
}

exports.getLatestTrailers = function(req, res){
    try {
        return service.getByRecent(req, res, Number.parseInt(req.query.releaseDate));   
    } catch (exception){
        res.json({error:exception});
    }
}

exports.updateMultipart = function(req, res){
    var id = req.params.id;
    var options = req.files;
    var upload = {};
    if (options.length > 1){
        cloudinary.addTrailerCover(options[0].path).then((result)=> {
            upload.trailerCover = result.secure_url;
            upload.trailerCoverId = result.ID;
            cloudinary.addTrailerVideo(options[1].path).then((result)=> {
                upload.trailerVideo = result.secure_url;
                upload.trailerVideoId = result.ID;
                return service.updateTrailerGallery(req, res, id, upload);
            });
        });
    }else if (options[0].fieldname == 'trailerCover'){
        cloudinary.addTrailerCover(options[0].path).then((result)=> {
            upload.trailerCover = result.secure_url;
            upload.trailerCoverId = result.ID;
            return service.updateTrailerGallery(req, res, id, upload);
            });
    }else if(options[0].fieldname == 'trailerVideo'){
        cloudinary.addTrailerVideo(options[0].path).then((result)=> {
            upload.trailerVideo = result.secure_url;
            upload.trailerVideoId = result.ID;
            return service.updateTrailerGallery(req, res, id, upload);
            });
    }else{
        res.json({message: 'Request must contain either video or image'});
    }   
}
