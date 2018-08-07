var express = require('express');
var router = express.Router();
var trailerController = require('../Controllers/trailerController');

/* GET trailers listing. */
router.get('/', trailerController.getTrailers);

router.get('/:id', trailerController.getTrailerById);

router.post('/add', trailerController.addTrailer);

router.delete('/delete/:id', trailerController.deleteTrailer);

// router.put('/update/:id', trailerController.updateTrailer);

module.exports = router;