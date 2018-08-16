//This section defines the path to access some functions of the roles feature
var express = require('express');
var router = express.Router();
var roleController = require('../Controllers/roleController');

/* GET trailers listing. */
router.get('/', roleController.getAll);

router.get('/:id', roleController.getById);

router.post('/create', roleController.add);

router.delete('/delete/:id', roleController.delete);

router.get('/search', roleController.search);

module.exports = router;