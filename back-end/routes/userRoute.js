var express = require('express');
var router = express.Router();
var userController = require('../Controllers/userController');
var trailerController = require('../Controllers/trailerController');
var uploadService = require('../Uploads/userUploads/uploadService');
var passportLocal = require('../Config/passport-local');

/* GET users listing. */
router.get('/', passportLocal.isLoggedIn, userController.getAll);

router.get('/search/:id', userController.getById);

// router.post('/uploadProfilePicture', uploadService.upload.single('profilePicture'));

router.delete('/delete/:id', passportLocal.isLoggedIn, userController.delete);

router.get('/search', userController.search);

router.post('/signup', userController.createAccount);

router.post('/login', passportLocal.login);

router.get('/logout', passportLocal.logout, trailerController.getAll);

module.exports = router;