//Retrieves and serves data for usage
var service = require('../Services/celebrityService');
var cloudinary = require('../Config/cloudinary');

exports.add = function(req, res){
    data = {
        name: req.body.name,
        biography: req.body.biography,
        dateOfBirth: req.body.dateOfBirth,//MonthDate eg 0101 = jan 1st
        picture : req.files[0].path,
        pictureId: '', 
        thumbnail : req.files[1].path,
        thumbnailId : '',
        roles: req.body.roles,
    }
    cloudinary.addCelebrityPictures(data.picture).then((result)=> {
        data.picture = result.secure_url;
        data.pictureId = result.ID;
        cloudinary.addCelebrityThumbnails(data.thumbnail).then((result)=> {
            data.thumbnail = result.secure_url;
            data.thumbnailId = result.ID;            
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
    return service.search(req, res, option);
}

exports.searchByName = function(req, res){
    var option = req.params.name;
    var data = {name: {$regex: option, $options: 'i'}};
    return service.searchByName(req, res, data);
}

exports.update = function(req, res){
    var id = req.params.id;
    var option = req.body;
    return service.updateCeleb(req, res, id, option);
}

exports.delete = function(req, res){
    var option = req.params.id;
    return service.deleteCelebrity(req, res, option);
}

exports.getByBirth = function(req, res){
    return service.getByBirth(req, res);
}

exports.updateMultipart = function(req, res){
    var id = req.params.id;
    var options = req.files;
    var upload = {};
    if (options.length > 1){
        cloudinary.addCelebrityPictures(options[0].path).then((result)=> {
            upload.picture = result.url;
            upload.pictureId = result.ID;
            cloudinary.addCelebrityThumbnails(options[1].path).then((result)=> {
                upload.thumbnail = result.url;
                upload.thumbnailId = result.ID;
                return service.updateCelebrityGallery(req, res, id, upload);
            });
        });
    }else if (options[0].fieldname == 'picture'){
        cloudinary.addCelebrityPictures(options[0].path).then((result)=> {
            upload.picture = result.url;
            upload.pictureId = result.ID;
            return service.updateCelebrityGallery(req, res, id, upload);
        });
    }else if(options[0].fieldname == 'thumbnail'){
        cloudinary.addCelebrityThumbnails(options[0].path).then((result)=> {
            upload.thumbnail = result.url;
            upload.thumbnailId = result.ID;
            return service.updateCelebrityGallery(req, res, id, upload);
            });
    }else{
        res.json({message: 'Request must contain a picture or thumbnail'});
    }   
}