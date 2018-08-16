//process for uploading images
var multer = require('multer');

//adjust how files are stored
var storage = multer.diskStorage({
    destination: function(req, file, callback){
        callback(null, './Uploads/celebrityUploads/Images/');
    },
    filename: function(req, file, callback){
        callback(null, 'CelebImage_'+ file.originalname);
    }
});

var fileFilter = function(req, file, callback){
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
        //accept a file
        callback(null, true);
    } else {
        //reject a file
        callback(new Error('Clips upload failed. Supports only jpeg/png'), false);
    }    
}

exports.upload = multer({
    storage: storage, 
    limits: { 
        fileSize: 1024 * 1024 * 15
    },
    fileFilter: fileFilter
});
