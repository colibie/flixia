var express = require('express');
var router = express.Router();
var trailerController = require('../Controllers/trailerController');
var uploadService = require('../Uploads/uploadService');

/* GET trailers listing. */
router.get('/', trailerController.getAll);

router.get('/:id', trailerController.getById);

router.post('/create', uploadService.upload.any(), trailerController.add);

// router.post('/create', uploadService.upload.fields([
//     {name: 'trailerCover', maxCount: 1},
//     {name: 'TrailerVideo', maxCount: 1}]),
//     trailerController.add);

router.delete('/delete/:id', trailerController.delete);

router.get('/search', trailerController.search);

module.exports = router;