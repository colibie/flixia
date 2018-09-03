var cloudinary = require('cloudinary');

//promise is used here to ensure that file uploads before the next function happens
exports.addTrailerCover = function(filename){
    return new Promise(resolve => {
        cloudinary.uploader.upload(filename, function(result){
            resolve({url: result.url, ID: result.public_id});
        },
        {resource_type: 'image', folder: 'trailerImages', use_filename: true, 
            width: 250, height: 350, crop:'limit'});
    }, reject => {
        reject({message: 'File could not be uploaded'});
    });
}

exports.addTrailerVideo = function(filename){
    return new Promise(resolve => {
        cloudinary.uploader.upload(filename, function(result){
            resolve({url: result.url, ID: result.public_id});
        }, 
        {resource_type: 'video', folder: 'trailerVideos', use_filename: true});
    }, reject => {
        reject({message: 'File could not be uploaded'});
    });
}

//promise is used here to ensure that file uploads before the next function happens
exports.addClipUpload = function(filename){
    return new Promise(resolve => {
        cloudinary.uploader.unsigned_upload(filename,'v6ebp55w', function(result){
            resolve({url: result.url, ID: result.public_id});
        }, {resource_type: 'video'});
    }, reject => {
        reject({message: 'File could not be uploaded'});
    });
}

exports.addCelebrityPictures = function(filename){
    return new Promise(resolve => {
        cloudinary.uploader.upload(filename, function(result){
            resolve({url: result.url, ID: result.public_id});
        },         
        {resource_type: 'image',folder: 'celebPictures', use_filename: true,
            width:1024, crop: 'limit'});
    }, reject => {
        reject({message: 'File could not be uploaded'});
    });
}

exports.addCelebrityThumbnails = function(filename){
    return new Promise(resolve => {
        cloudinary.uploader.upload(filename, function(result){
            resolve({url: result.url, ID: result.public_id});
        },         
        {resource_type: 'image',folder: 'celebThumbs', use_filename: true,
            width:250, height:350, crop:'limit'});
    }, reject => {
        reject({message: 'File could not be uploaded'});
    });
}

exports.addProfilePicture = function(filename){
    return new Promise(resolve => {
        cloudinary.uploader.upload(filename, function(result){
            resolve({url: result.url, ID: result.public_id});
        },         
        {resource_type: 'image',folder: 'profilePictures', use_filename: true});
    }, reject => {
        reject({message: 'File could not be uploaded'});
    });
}

exports.deleteImage = function(publicId){
    return new Promise(function(resolve){
        cloudinary.uploader.destroy(publicId, function(result){
            resolve(result);
        }, {resource_type : "image"});
    }, reject => {
        reject({message: 'File could not be deleted'});
    });
}
exports.deleteVideoFile = function(publicId){
    return new Promise (function(resolve){
        cloudinary.uploader.destroy(publicId, function(result){
            resolve(result);
        }, {resource_type: "video"});
    }, reject => {
        reject({message: 'File could not be deleted'});
    });
}