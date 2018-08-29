var repo = require('../Repositories/adminRepo');
var baseService = require('../Services/baseService'); //contains the content of module.exports
var joiSchema = require('../JoiSchema/adminSchema');
var validator = require('../JoiSchema/validator')

function adminService(joiSchema){
    //must be added for population purposes
    this.structure = '-__v -password';
    this.populateA = ''; 
    this.populateB = ''; 
    
    //needed to define the joiSchema
    this.joiSchema = joiSchema;
}
adminService.prototype = baseService(repo);

adminService.prototype.uploadPicture = function(req, res, data){
    try{ 
        repo.update(data._id, {profilePicture: data.profilePicture}, function(err, admin){
            if(err) res.json({err: err, message: `The admin could not be updated`});
            res.json({message: 'Profile picture uploaded successfully'});
        });
    }catch(exception){
        res.json({error: exception});
    }   
}

adminService.prototype.createAccount = function(req, res, data){
    try{
        var valid = validator.isValid(req, res, this.joiSchema, data);
        if (valid != null){
            res.json(valid);
        }else{
            repo.createAccount(data, function(err, adminAccount){
                if(err) res.json({err: err, message: "Something went wrong, please try again"});
                else{

                    adminAccount.save();
                    res.json({sub: adminAccount, message: 'Your account has been created successfully'});
                };
            });
        }
    }catch(exception){
        res.json({error: exception});
    } 
}

BaseService.prototype.adminLogin = function(req, res, options, data){
    try{
        this.repo.get(options, '','','', function(err, result){
            if (result.length < 1){
                res.status(401).json({message: 'Email/Password is incorrect'});
            } else if(result.length >= 1){
                bcrypt.compare(data.password, result[0].password, function(err, success){
                    if(err) res.status(401).json({error: err, message: 'Email/Password is incorrect'});
                    else if (success) {
                        res.status(200).json({
                            message: 'Welcome and enjoy your stay',
                            token: token({
                                email: result[0].email,
                                id: result[0]._id
                            }),
                            admin: true
                        });
                    }
                    else {
                        res.status(401).json({message: 'Email/Password is incorrect' });
                    }
                });
            }else{
                res.status(500).json({message: 'Email/Password is incorrect'});
            }
        });
    }catch(exception){
        res.status(520).json({error: exception});
    }
}    
   
module.exports = new adminService(joiSchema);
