var repo = require('../Repositories/userRepo');
var baseService = require('../Services/baseService'); //contains the content of module.exports
var joiSchema = require('../JoiSchema/userSchema');
var nodemailer = require('nodemailer');
var validator = require('../JoiSchema/validator')

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
    try{
        repo.update(data._id, {profilePicture: data.profilePicture}, function(err, user){
            if(err) res.json({err: err, message: `The user could not be updated`});
            else res.json({message: 'Profile picture uploaded successfully'});
        });
    }catch(exception){
        res.json({error:exception});
    }
}

userService.prototype.createAccount = function(req, res, data){
    try{
        var valid = validator.isValid(req, res, this.joiSchema, data);
        if (valid != null){
            res.json(valid);
        }else{
            repo.createAccount(data, function(err, userAccount){
                if(err) res.status(500).json({err: err, message: "Something went wrong, please try again"});
                else{
                    sendMail(req, res, data.email, data.username);
                    userAccount.save();
                    res.json({sub: userAccount, message: 'Your account has been created successfully'});
                };
            });
        }
    }catch(exception){
        res.json({error:exception});
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
                res.status(500).json({message: 'Account could not be created'})
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
            if (user[0].verified == true){
                res.json({message: 'You\'re already verified. Please proceed'})
            }else{
                repo.update(user[0]._id, {verified: true}, function(err, update){
                    if(err) res.status(500).json({err: err, message: `The user could not be verified`});
                    else res.json({message: update});
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

    
module.exports = new userService(joiSchema);
