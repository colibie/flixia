var cloudinary = require('cloudinary');

//promise is used here to ensure that file uploads before the next function happens
exports.addTrailerCover = function(filename){
    return new Promise(resolve => {
        cloudinary.uploader.unsigned_upload(filename, {resource_type: 'image'},'kpxzsgjw', function(result){
            resolve({url: result.url, ID: result.public_id});
        });
    }, reject => {
        reject({message: 'File could not be uploaded'});
    });
}

exports.addTrailerVideo = function(filename){
    return new Promise(resolve => {
        console.log('jere');
        cloudinary.uploader.upload(filename, {resource_type: 'video'}, 'djo8romk',function(result){
            console.log(result);
            resolve({url: result.url, ID: result.public_id});
        });
    }, reject => {
        reject({message: 'File could not be uploaded'});
    });
}

//promise is used here to ensure that file uploads before the next function happens
exports.addClipUpload = function(filename){
    return new Promise(resolve => {
        cloudinary.uploader.unsigned_upload(filename,{resource_type: 'video'} ,'v6ebp55w', function(result){
            resolve({url: result.url, ID: result.public_id});
        });
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
