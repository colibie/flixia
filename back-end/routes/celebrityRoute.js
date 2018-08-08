//Defines the path that you need to access some functions on the celebrity feature
var express = require('express');
var router = express.Router();
var celebrityController = require('../Controllers/celebrityController');

/* GET trailers listing. */
router.get('/', celebrityController.getAll);

router.get('/:id', celebrityController.getById);

router.post('/create', celebrityController.add);

router.delete('/delete/:id', celebrityController.delete);

router.get('/search', celebrityController.search);

module.exports = router;