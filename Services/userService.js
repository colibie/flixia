var repo = require('../Repositories/userRepo');
var baseService = require('../Services/baseService'); //contains the content of module.exports
var joiSchema = require('../JoiSchema/userSchema');
var nodemailer = require('nodemailer');
var validator = require('../JoiSchema/validator');
var token = require('../Config/jwt');
var cloud = require('../Config/cloudinary');
var model = require('../Models/userModel');
var async = require('async');
var crypto = require('crypto');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'helloflixia@gmail.com',
        pass: 'genesystechhub'
    }
});

function userService(joiSchema){
    //must be added for population purposes
    this.structure = '-__v -password';
    this.populateA = ''; // {path: 'categories', select: '-_id -__v'}
    this.populateB = ''; //{path: 'userComments', select:'-user -__v'};
    
    //needed to define the joiSchema
    this.joiSchema = joiSchema;
}
userService.prototype = baseService(repo);

userService.prototype.uploadPicture = function(req, res, data){
    repo.update(data._id, {profilePicture: data.profilePicture, profilePictureId : data.profilePictureId}, function(err, user){
        try{
            if(err) res.json({err: err, message: `The profile picture could not be updated`});
            else if (data.profilePictureId != null){
                res.json({message: 'Profile picture uploaded successfully'});
            }
            else res.json({message: 'Profile picture not uploaded. Please try again'});
        }catch(exception){
            res.json({error:exception});
        }
    });
}

userService.prototype.createAccount = function(req, res, data){
    var valid = validator.isValid(req, res, this.joiSchema, data);
    if (valid != null){
        res.json(valid);
    }else{
        repo.createAccount(data, function(err, userAccount){
            try{
                if(err) res.status(500).json({err: err, message: "Something went wrong, please try again"});
                else{
                    sendMail(req, res, data.email, data.username);
                    userAccount.save();
                    res.json({
                        sub: userAccount, 
                        message: 'Your account has been created successfully',
                        token: token({
                            email: data.email,
                            id: data._id
                        }),
                    });
                };
            }catch(exception){
                res.json({error:exception});
            }
        });
    }
}

sendMail = function(req, res, userAccount, name){
    try{ 
        // setup email data with unicode symbols
        var mailOptions = {
            from: 'helloflixia@gmail.com', // sender address
            to: userAccount, // list of receivers
            subject: `Welcome to Our World Of Nollywood Movies ${name} 🎇`, // Subject line
            html: "<p>You are very welcome to our platform😁. Expect enough fun and updates from us.</p>"+
                `Please click <a href='http://localhost:3000/users/email/verify/${userAccount}'>here😭</a` + 
                `or copy this link to your browser: http://localhost:3000/users/email/verify/${userAccount}`
        };
        /**I need a function that ensures that email is sent
         * else notify me of the failure to send email.
         */
        // send mail with defined transport object
        transporter.sendMail(mailOptions, function(err){
            if (err) {
                console.log('Email not sent');
            }
            else{
                console.log('Email sent successfully');
            }
        });
    }catch(exception){
        res.status(520).json({error:exception});
    }    
}

userService.prototype.verify = function(req, res, data){    
    repo.get(data, '', '', '', function(err, user){
        try {
        if (err) res.status(500).json({err: err, message: 'Something went wrong.Please try again'});
        else if (user.length >= 1){
            if (user[0].verified == 'true'){
                res.json({message: 'You\'re already verified. Please proceed'})
            }else{
                repo.update(user[0]._id, {verified: true}, function(err, update){
                    if(err) res.status(500).json({err: err, message: `The user could not be verified`});
                    else res.json({message: 'You have successfully been verified. We welcome you OFFICIALLY'});
                });
            }
        }else {
            res.status(404).json({message: 'Your email doesn\'t seem to be registered. Please do try to signup again'});
        }
    } catch (error) {
        res.status(520).json({error: error});
        }
    });
}

userService.prototype.deleteUser = function (req, res, id){
    repo.getById(id,'','','', function(err, data){
        try {
            if (data != null){
                repo.delete({_id:id}, function(err, result){
                    if (err) res.json({error: err, message: 'The data could not be deleted'});
                    else if (result == null){
                        res.json({message: 'Resource does not exist'});
                    }else{
                        cloud.deleteImage(data.profilePictureId).then(()=>{
                            res.json({message: 'Resource deleted successfully'});
                        });                  
                    }
                });
            }else {
                res.json({message: "Picture not found, delete not successful"});
            }        
        } catch(exception){
            res.json({error : exception});
        }
    })       
};


userService.prototype.forgotPass = (req, res) => async.waterfall([
    function(done) {
      crypto.randomBytes(20, function(err, buf) {
        var token = buf.toString('hex');
        done(err, token);
      });
    },
    function(token, done) {
      repo.getOne({ email: req.body.email }, function(err, user) {
        if (!user) {
         // req.flash('error', 'No account with that email address exists.');
          return res.redirect('/forgot');
        }

        user.resetPasswordToken = token;
        user.resetPasswordExpires = Date.now() + 3600000; // 1 hour

        user.save(function(err) {
          done(err, token, user);
        });
      });
    },
    function(token, user, done) {
      var smtpTransport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'helloflixia@gmail.com',
          pass: 'genesystechhub'
        }
      });
      var mailOptions = {
        to: user.email,
        from: 'helloflixia@gmail.com',
        subject: 'Flixia Password Reset',
        text: 'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
          'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
          'http://' + req.headers.host + '/users/reset/' + token + '\n\n' +
          'If you did not request this, please ignore this email and your password will remain unchanged.\n'
      };
      smtpTransport.sendMail(mailOptions, function(err) {
          console.log('about to send mail');
        //req.flash('info', 'An e-mail has been sent to ' + user.email + ' with further instructions.');
        done(err, 'done');
      });
    }
  ], function(err) {
    if (err) return res.json({error : err});
    //res.redirect('/forgot');
  });


  userService.prototype.resetPass = function(req, res) {
    async.waterfall([
      function(done) {
        repo.getOne({ resetPasswordToken: req.params.token, resetPasswordExpires: { $gt: Date.now() } }, function(err, user) {
          if (!user) {
            res.json({message:'Password reset token is invalid or has expired.'});
            //return res.redirect('back');
          }
  
          user.password = req.body.password;
          user.resetPasswordToken = undefined;
          user.resetPasswordExpires = undefined;
  
          user.save(function(err) {
            //req.login(user, function(err) {
              done(err, user);
            });
          });
      },
      function(user, done) {
        var smtpTransport = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: 'helloflixia@gmail.com',
            pass: 'genesystechhub'
          }
        });
        var mailOptions = {
          to: user.email,
          from: 'helloflixia@gmail.com',
          subject: 'Your password has been changed',
          text: 'Hello,\n\n' +
            'This is a confirmation that the password for your account ' + user.email + ' has just been changed.\n'
        };
        smtpTransport.sendMail(mailOptions, function(err) {
          req.json({message: 'Success! Your password has been changed.'});
          done(err);
        });
      }
    ], function(err) {
      res.json({message : 'Password reset succesful'});
    });
  };
    
module.exports = new userService(joiSchema);
