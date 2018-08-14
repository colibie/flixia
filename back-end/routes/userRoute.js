var express = require('express');
var router = express.Router();
var userController = require('../Controllers/userController');
var uploadService = require('../Uploads/userUploads/uploadService');

/* GET users listing. */
router.get('/', userController.getAll);

router.get('/search/:id', userController.getById);

// router.post('/uploadProfilePicture', uploadService.upload.single('profilePicture'));

router.delete('/delete/:id', userController.delete);

router.get('/search', userController.search);

router.post('/signup', userController.createAccount);

router.post('/login', userController.login);

module.exports = router;