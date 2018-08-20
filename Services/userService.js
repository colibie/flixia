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
    this.structure = '-__v';
    this.populateA = ''; // {path: 'categories', select: '-_id -__v'}
    this.populateB = ''; //{path: 'userComments', select:'-user -__v'};
    
    //needed to define the joiSchema
    this.joiSchema = joiSchema;
}
userService.prototype = baseService(repo);

userService.prototype.uploadPicture = function(req, res, data){
    repo.update(data._id, {profilePicture: data.profilePicture}, function(err, user){
        if(err) res.json({err: err, message: `The user could not be updated`});
        res.json({message: 'Profile picture uploaded successfully'});
    });
}

userService.prototype.createAccount = function(req, res, data){    
    var valid = validator.isValid(req, res, this.joiSchema, data);
    if (valid != null){
        res.json(valid);
    }else{
        repo.createAccount(data, function(err, userAccount){
            if(err) res.json({err: err, message: "Something went wrong, please try again"});
            else{                    
                sendMail(req, res, data.email, data.username);
                userAccount.save();
                res.json({sub: userAccount, message: 'Your account has been created successfully'});                      
            };        
        });       
    }
} 

sendMail = function(req, res, userAccount, name){
    // setup email data with unicode symbols
    var mailOptions = {
        from: 'helloflixia@gmail.com', // sender address
        to: userAccount, // list of receivers
        subject: `Welcome to Our World Of Nollywood Movies ${name} 🎇`, // Subject line
        html: "<p>You are very welcome to our platform😁. Expect enough fun and updates from us.</p>"
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, function(err){
        if (err) {
            res.json({message: 'Account could not be created'})
        }
        else{
            console.log('Email sent successfully');
        }
    });
}

module.exports = new userService(joiSchema);
