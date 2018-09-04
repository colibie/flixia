//process for uploading images
var multer = require('multer');

//adjust how files are stored
var storage = multer.diskStorage({
    destination: function(req, file, callback){
        callback(null, './Uploads/promoTrailerUploads/Images/');
    },
    filename: function(req, file, callback){
        callback(null, 'promoTrailerImage_'+Date.now()+'-'+ file.originalname);
    }
});

var fileFilter = function(req, file, callback){
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
        //accept a file
        callback(null, true);
    } else {
        //reject a file
        callback(new Error('Trailer promo upload failed. Supports only jpeg/png'), false);
    }    
}

exports.upload = multer({
    storage: storage, 
    limits: { 
        fileSize: 1024 * 1024 * 15
    },
    fileFilter: fileFilter
});
