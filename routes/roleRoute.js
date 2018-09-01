//This section defines the path to access some functions of the roles feature
var express = require('express');
var router = express.Router();
var roleController = require('../Controllers/roleController');

/* GET trailers listing. */
router.get('/', roleController.getAll);

router.get('/search/:id', roleController.getById);

router.post('/create', roleController.add); //adminprotected

router.delete('/delete/:id', roleController.delete);//adminprotected

router.get('/search', roleController.search);

router.post('/update/:id', roleController.update);

module.exports = router;