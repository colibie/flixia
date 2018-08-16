var express = require('express');
var router = express.Router();
var userController = require('../Controllers/userController');
var trailerController = require('../Controllers/trailerController');
var uploadService = require('../Uploads/userUploads/uploadService');
var passportFacebook = require('../Config/passport-facebook');

router.get('/auth/facebook', passportFacebook.authenticate('facebook', {
    scope : ['public_profile', 'email']
}));

router.get('/fbsignup', function(req, res){
    res.json({message: 'Signup failed'});
});

router.get('/auth/facebook/callback', 
    passportFacebook.authenticate('facebook', {
        successRedirect : '/users',
        failureRedirect: '/fbsignup'
    }));

router.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
})
module.exports = router;