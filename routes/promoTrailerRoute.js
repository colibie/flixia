var express = require('express');
var router = express.Router();
var promoTrailerController = require('../Controllers/promoTrailerController');
var uploadService = require('../Uploads/promoTrailerUploads/promoTrailerUploadService');

/* GET trailers listing. */
router.get('/', promoTrailerController.getAll);

router.get('/search/:id', promoTrailerController.getById);

//adminprotected
router.post('/create', uploadService.upload.any(), promoTrailerController.add);

//adminprotected
router.delete('/delete/:id', promoTrailerController.delete);

router.get('/search', promoTrailerController.search);

router.get('/search/title/:title', promoTrailerController.searchByTitle);

router.get('/sort', promoTrailerController.getLatestTrailers);

router.post('/update/:id', promoTrailerController.update);

module.exports = router;