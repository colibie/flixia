var service = require('../Services/clipService');
var cloudinary = require('../Config/cloudinary');


exports.add = function(req, res){
    var data = {
        title: req.body.title,
        description: req.body.description,
        rating: req.body.rating,
        time: Date.now(),
        user: req.body.user,
        clipComment: req.body.clipComment,
        clipContent: req.file.path,
        clipContentId: '',
    }
    cloudinary.addClipUpload(data.clipContent).then((result)=> {
        data.clipContent = result.secure_url;
        data.clipContentId = result.ID;        
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

exports.delete = function(req, res){
    var option = req.params.id;
    return service.deleteClip(req, res, option);
}

exports.getLatestClips = function(req, res){
    try {
        return service.getByRecent(req, res, Number.parseInt(req.query.time));   
    } catch (exception){
        res.json({error:exception});
    }
}

exports.update = function(req, res){
    var id = req.params.id;
    var option = req.body;
    return service.update(req, res, id, option);
}