var express = require('express');
var router = express.Router();
var trailerController = require('../Controllers/trailerController');

/* GET trailers listing. */
router.get('/', trailerController.getAll);

router.get('/:id', trailerController.getById);

router.post('/create', trailerController.add);

router.delete('/delete/:id', trailerController.delete);

router.get('/search', trailerController.search);

module.exports = router;