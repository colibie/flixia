//process for uploading images
var multer = require('multer');

//adjust how files are stored
var storage = multer.diskStorage({
    destination: function(req, file, callback){
        callback(null, './Images/uploads/');
    },
    filename: function(req, file, callback){
        callback(null, 'trailer_'+ file.originalname);
    }
});

var fileFilter = function(req, file, callback){
    
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
        //accept a file
        callback(null, true);
    } else {
        //reject a file
        callback(new Error('Trailer upload failed. Image file Supports only jpeg and png'), false);
    }    
}

exports.upload = multer({
    storage: storage, 
    limits: { 
        fileSize: 1024 * 1024 * 15 //accepts up to 15MB
    },
    fileFilter: fileFilter
});
