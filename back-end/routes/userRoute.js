var express = require('express');
var router = express.Router();
var userController = require('../Controllers/userController');
var trailerController = require('../Controllers/trailerController');
var uploadService = require('../Uploads/userUploads/uploadService');
var passport = require('../Config/passport');

/* GET users listing. */
router.get('/', passport.isLoggedIn, userController.getAll);

router.get('/search/:id', userController.getById);

// router.post('/uploadProfilePicture', uploadService.upload.single('profilePicture'));

router.delete('/delete/:id', passport.isLoggedIn, userController.delete);

router.get('/search', userController.search);

router.post('/signup', userController.createAccount);

router.post('/login', passport.login);

router.get('/logout', passport.logout, trailerController.getAll);

module.exports = router;