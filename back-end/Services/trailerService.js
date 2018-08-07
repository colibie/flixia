//this is where all logic happens
var repo = require('../Repositories/trailerRepo');

exports.addtrailer = function(req, res, data){
    repo.add(data, function(err, trailer){
        if(err) res.status(500).json({err: err, message: 'the trailer could not be created'});
        res.status(201).json({message: 'the trailer was created successfully'});
    });
}

exports.getAlltrailers = function(req, res){
    repo.get({}, '-__v',{path: 'categories', select: '-__v'}, {path: 'comments', select:'-__v'}, function(err, trailers){
        if(err) res.status(500).json({err: err, message: 'Something went wrong'});
        res.status(200).json(trailers);
    });
}

exports.deletetrailer = function(req, res, options){
    repo.delete(options, function(err){
        if(err) res.status.json({err: err, message: 'The trailer could not be deleted'});
        res.json({message: 'The trailer was deleted successfully'});
    });
}

// exports.updatetrailer = function(req, res, id, options){
//     repo.update(id, options, function(err){
//         if(err) res.json({err: err, message: `The trailer could not be updated`});
//         res.json({message: update});
//     });
// }

// exports.gettrailersInPost = function(req, res, options){
//     repo.get(options, '', {path: 'user', select: 'name'}, 'post',function(err, posts){
//         if(err) res.json({err: err, message: 'Something went wrong'});
//         res.json(posts);
//     });
// }