//This section defines the path to access some functions of the clips feature
var express = require('express');
var router = express.Router();
var clipsController = require('../Controllers/clipsController');

/* GET trailers listing. */
router.get('/', clipsController.getAll);

router.get('/search/:id', clipsController.getById);

router.post('/create', clipsController.add);

router.delete('/delete/:id', clipsController.delete);

router.get('/search', clipsController.search);

module.exports = router;