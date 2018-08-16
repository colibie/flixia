//process for uploading images
var multer = require('multer');

//adjust how files are stored
var storage = multer.diskStorage({
    destination: function(req, file, callback){
        callback(null, './Uploads/clipUploads/clipVideos/');
    },
    filename: function(req, file, callback){
        callback(null, 'cVideo_'+Date.now()+'-'+ file.originalname);
    }
});

var fileFilter = function(req, file, callback){
    if (file.mimetype === 'video/mp4'){
        //accept a file
        callback(null, true);
    } else {
        //reject a file
        callback(new Error('Clip upload failed. Supports only mp4'), false);
    }    
}

exports.upload = multer({
    storage: storage, 
    limits: { 
        fileSize: 1024 * 1024 * 250
    },
    fileFilter: fileFilter
});
