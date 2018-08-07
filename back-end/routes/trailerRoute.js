var express = require('express');
var router = express.Router();
var trailerController = require('../Controllers/trailerController');
var trailerImage = require('../Images/imageUpload');

/* GET trailers listing. */
router.get('/', trailerController.getAll);

router.get('/:id', trailerController.getById);

router.post('/create', trailerImage.upload.single('trailerCover'), trailerController.add);

router.delete('/delete/:id', trailerController.delete);

router.get('/search', trailerController.search);

module.exports = router;