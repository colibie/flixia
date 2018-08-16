var FacebookStrategy = require('passport-facebook').Strategy;
var User = require('../Models/userModel');
var userService = require('../Services/userService');
var configAuth = require('./auth');
var passport = require('passport');

passport.serializeUser(function(user, done){
    done(null, user._id);
});

passport.deserializeUser(function(id, done){
    User.findById(id, function(err, user){
        done(err, user);
    });
});

passport.use(new FacebookStrategy({
    clientID: configAuth.facebookAuth.clientID,
    clientSecret: configAuth.facebookAuth.clientSecret,
    callbackURL: configAuth.facebookAuth.callbackURL,
    profileFields: configAuth.facebookAuth.profileFields,
    },
    function(token, refreshToken, profile, done) {
        console.log(profile);
        process.nextTick(function(){
            User.findOne({email : profile.emails[0].value}, function(err,user){
                if (err) return done(err);
                if (user) return done(null, user);
                else {
                    var newUser = new User(); 
                    newUser.token = token;
                    newUser.username = profile.name.givenName + ' ' + profile.name.familyName;
                    newUser.email = profile.emails[0].value;
                    
                    newUser.save(function(err){
                        if (err) throw err;
                        return done(null, newUser);
                    });
                }
            });
        });
    }
));

module.exports = passport;

