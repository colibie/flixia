var express = require('express');
var router = express.Router();
var trailerController = require('../Controllers/trailerController');
var uploadService = require('../Uploads/trailerUploads/uploadService');

/* GET trailers listing. */
router.get('/', trailerController.getAll);

router.get('/search/:id', trailerController.getById);

router.post('/create', uploadService.upload.any(), trailerController.add);

router.delete('/delete/:id', trailerController.delete);

router.get('/search', trailerController.search);

module.exports = router;