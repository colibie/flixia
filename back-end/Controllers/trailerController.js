// this is where all data fetching happens
var service = require('../Services/trailerService');

exports.addTrailer = function(req, res){
    var data = {
        title: req.body.title,
        description: req.body.description,
        rating: req.body.rating,
        year: req.body.year,
        productionCompany: req.body.productionCompany,
        duration: req.body.duration,
        categories: req.body.categories,
        comments: req.body.comments
    };
    return service.addTrailer(req, res, data);
}

exports.getTrailers = function(req, res){
    return service.getAllTrailers(req, res);
}

exports.deleteTrailer = function(req, res){
    var option = {_id: req.params.id};
    return service.deleteTrailer(req, res, option);
}




// exports.getTrailersByParam = function(req, res){
//     var option = req.query;
//     return service.getTrailersByParam(req, res, option);
// }

// exports.updateTrailer = function(req, res){
//     id = req.params.id;
//     update = {
//         time: Date.now(),
//         TrailerBody: req.body.TrailerBody};
//     return service.updateTrailer(req, res, id, update);    
// }