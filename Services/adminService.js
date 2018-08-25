var repo = require('../Repositories/adminRepo');
var baseService = require('../Services/baseService'); //contains the content of module.exports
var joiSchema = require('../JoiSchema/adminSchema');
var validator = require('../JoiSchema/validator')

// var transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: 'helloflixia@gmail.com',
//         pass: 'genesystechhub'
//     }
// });

function adminService(joiSchema){
    //must be added for population purposes
    this.structure = '-__v -password';
    this.populateA = ''; // {path: 'categories', select: '-_id -__v'}
    this.populateB = ''; //{path: 'userComments', select:'-user -__v'};
    
    //needed to define the joiSchema
    this.joiSchema = joiSchema;
}
adminService.prototype = baseService(repo);

adminService.prototype.uploadPicture = function(req, res, data){
    repo.update(data._id, {profilePicture: data.profilePicture}, function(err, user){
        if(err) res.json({err: err, message: `The user could not be updated`});
        res.json({message: 'Profile picture uploaded successfully'});
    });
}

adminService.prototype.createAccount = function(req, res, data){
    var valid = validator.isValid(req, res, this.joiSchema, data);
    if (valid != null){
        res.json(valid);
    }else{
        repo.createAccount(data, function(err, adminAccount){
            if(err) res.json({err: err, message: "Something went wrong, please try again"});
            else{
                //sendMail(req, res, data.email, data.adminname);
                adminAccount.save();
                res.json({sub: adminAccount, message: 'Your account has been created successfully'});
            };
        });
    }
}

// sendMail = function(req, res, adminAccount, name){
//     // setup email data with unicode symbols
//     var mailOptions = {
//         from: 'helloflixia@gmail.com', // sender address
//         to: adminAccount, // list of receivers
//         subject: `Welcome to Our World Of Nollywood Movies ${name} 🎇`, // Subject line
//         html: "<p>You are very welcome to our platform😁. Expect enough fun and updates from us.</p>"
//     };

    /**I need a function that ensures that email is sent
     * else notify me of the failure to send email.
     */
    // send mail with defined transport object
//     transporter.sendMail(mailOptions, function(err){
//         if (err) {
//             res.json({message: 'Account could not be created'})
//         }
//         else{
//             console.log('Email sent successfully');
//         }
//     });
// }
    
module.exports = new adminService(joiSchema);
