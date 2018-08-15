var LocalStrategy = require('passport-local').Strategy;
var User = require('../Models/userModel');
var passport = require('passport');

//for persistent login sessions
passport.serializeUser(function(user, done){
    done(null, user._id);
});

passport.deserializeUser(function(id, done){
    User.findById(id, function(err, user){
        done(err, user);
    });
});

exports.login = function(req, res){

    passport.authenticate('local-login', {
        successRedirect: '/', //not redirected
        failureRedirect: '/trailers'
    })

    passport.use('local-login', new LocalStrategy(
            User.findOne({'email': req.body.email}, function(err, user){
                if (err) return done(err);
                if(user && user.validPassword(req.body.password)) {
                    return res.json({
                    message: 'Successfully logged in'
                    });
                }else {
                   res.json({
                        message: 'Login failed. Recheck email/password'
                    });
                }
            }), function(email, password, done){
                    console.log('here');
            }
        )
    )
}

