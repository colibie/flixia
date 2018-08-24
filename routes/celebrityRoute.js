//Defines the path that you need to access some functions on the celebrity feature
var express = require('express');
var router = express.Router();
var celebrityController = require('../Controllers/celebrityController');
var uploadService = require('../Uploads/celebrityUploads/celebPicsService');

/* GET trailers listing. */
router.get('/', celebrityController.getAll);

router.get('/search/:id', celebrityController.getById);

//adminprotected
router.post('/create', uploadService.upload.single('picture'), celebrityController.add);

//adminprotected
router.delete('/delete/:id', celebrityController.delete);

router.get('/search', celebrityController.search);

module.exports = router;