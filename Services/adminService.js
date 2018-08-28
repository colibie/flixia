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
   
module.exports = new adminService(joiSchema);
