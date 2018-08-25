var express = require('express');
var router = express.Router();
var adminController = require('../Controllers/adminController');
var uploadService = require('../Uploads/adminUploads/uploadService');

/* GET admins listing. */
router.get('/', adminController.getAll); //adminprotected

router.get('/search/:id', adminController.getById); //adminprotected

//loginprotected
router.post('/uploadProfilePicture', uploadService.upload.single('profilePicture'), adminController.uploadPicture);

//login/admin protected
router.delete('/delete/:id', adminController.delete);

//adminprotected
router.get('/search', adminController.search);

router.post('/signup', adminController.createAccount);

router.post('/login', adminController.login);

module.exports = router;