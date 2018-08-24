var cloudinary = require('cloudinary');

//promise is used here to ensure that file uploads before the next function happens
exports.addTrailerCover = function(filename){
    return new Promise(resolve => {
        cloudinary.uploader.upload(filename, function(result){
            resolve({url: result.url, ID: result.public_id});
        },
        {resource_type: 'image', folder: 'trailerImages', use_filename: true});
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
        },         
        {resource_type: 'video', use_filename: true});
    }, reject => {
        reject({message: 'File could not be uploaded'});
    });
}

exports.deleteUpload = function(publicId){
    return new Promise(function(resolve){
        cloudinary.uploader.destroy(publicId, function(result){
            resolve(result);
        });
    }, reject => {
        reject({message: 'File could not be deleted'});
    });
}
