//process for uploading images
var multer = require('multer');

//adjust how files are stored
var storage = multer.diskStorage({
    destination: function(req, file, callback){
        if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
            callback(null, './Uploads/trailerUploads/Images/');
        }else {
            callback(null, './Uploads/clipsUploads/clipVideos/');
        }
    },
    filename: function(req, file, callback){
        if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
            callback(null, 'tImage_'+ file.originalname);
        }else {
            callback(null, 'tVideo_'+ file.originalname);
        }
    }
});

var fileFilter = function(req, file, callback){
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
        //accept a file
        callback('Clips upload failed. Supports only mp4', false);
    } else if (file.mimetype === 'video/mp4'){
        callback(null, true);
    } else {
        //reject a file
        callback(new Error('Clips upload failed. Supports only mp4'), false);
    }    
}

var fileSize = function(){
    var size = 1024 * 1024 * 15;
    if (file.mimetype === 'video/mp4'){
        size = 1024 * 1024 * 250;
        return size;
    }else return size;
}
exports.upload = multer({
    storage: storage, 
    limits: { 
        fileSize: fileSize
    },
    fileFilter: fileFilter
});
