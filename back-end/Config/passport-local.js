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
        failureRedirect: '/trailers',
    });

    passport.use('local-login', new LocalStrategy(
            User.findOne({'email': req.body.email}, function(err, user){
                if (err) return res.status(500).json({err: err, message: 'Login failed'});
                if(req.session.user == user._id) res.status(200).json({message: 'You\'re logged in already'})
                else if(user && user.validPassword(req.body.password)) {
                    req.session.user = user._id;
                    return res.json({
                    message: 'Successfully logged in'
                    });
                }else {
                   res.json({
                        message: 'Login failed. Recheck email/password',
                    });
                }
            }), function(email, password, done){
                    console.log('here');
            }
        )
    )
}

exports.isLoggedIn = function(req, res, next){

    if(req.session.user){
        console.log(req.session);
        return next();
    }
    res.status(401).json({message: 'You have to login first'});
}

exports.logout = function(req, res, next){
    req.session.user = null;
    console.log(req.session);
    return next();
}
