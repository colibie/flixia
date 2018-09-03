//This section defines the path to access some functions of the clips feature
var express = require('express');
var router = express.Router();
var clipController = require('../Controllers/clipController');
var uploadService = require('../Uploads/clipUploads/clipUploadService');

/* GET trailers listing. */
router.get('/', clipController.getAll);

router.get('/search/:id', clipController.getById); //adminprotected

//login protected
router.post('/create', uploadService.upload.single('clipContent'), clipController.add);

//login protected
router.delete('/delete/:id', clipController.delete);

router.get('/search', clipController.search);

router.get('/sort', clipController.getLatestClips);

router.post('/update/:id', clipController.update);

module.exports = router;