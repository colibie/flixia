var express = require('express');
var router = express.Router();
var userController = require('../Controllers/userController');
var uploadService = require('../Uploads/userUploads/uploadService');

/* GET users listing. */
router.get('/', userController.getAll);

router.get('/:id', userController.getById);

router.post('/create', uploadService.upload.single('profilePicture'), userController.add);

router.delete('/delete/:id', userController.delete);

router.get('/search', userController.search);

module.exports = router;