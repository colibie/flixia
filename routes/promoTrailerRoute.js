var express = require('express');
var router = express.Router();
var promoTrailerController = require('../Controllers/promoTrailerController');
var uploadService = require('../Uploads/promoTrailerUploads/promoTrailerUploadService');

/* GET trailers listing. */
router.get('/', promoTrailerController.getAll);

router.get('/search/:id', promoTrailerController.getById);

//adminprotected
router.post('/create', uploadService.upload.single('promoCover'), promoTrailerController.add);

//adminprotected
router.delete('/delete/:id', promoTrailerController.delete);

router.get('/search', promoTrailerController.search);

router.get('/search/title/:title', promoTrailerController.searchByTitle);

router.post('/update/:id', promoTrailerController.update);

module.exports = router;