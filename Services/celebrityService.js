//Defines the propererties and functionalities we can perform with the celebrity feature
var repo = require('../Repositories/celebrityRepo');
var baseService = require('../Services/baseService'); //contains the content of module.exports
var joiSchema = require('../JoiSchema/celebritySchema');
var roleRepo = require('../Repositories/roleRepo');
var validator = require('../JoiSchema/validator');

function celebrityService(joiSchema){
    //must be added for population purposes
    this.structure = '-__v';
    this.populateA = {path: 'roles', select: 'name'};;
    this.populateB = '';
    //needed to define the joiSchema
    this.joiSchema = joiSchema;
}
celebrityService.prototype = baseService(repo);

celebrityService.prototype.addPopulate = function(req, res, data){
    var valid = validator.isValid(req, res, this.joiSchema, data);
    if (valid != null){
        res.status(400).json(valid);
    }
    else{
        repo.add(data, function(err, result){
            if (err) {
                if (err.code == 11000) res.status(409).json({err:err, message: 'Already taken. Pick another please'});
                else{
                    res.status(500).json({err: err, message: 'Data could not be created'});
                }
            }else{
                if (result.roles.length > 0){
                    result.roles.forEach(element => {
                        roleRepo.getById(element,'','','', function(err, role){
                            role.celebrities.push(result._id);
                            role.save();
                            if(err) res.json({err: err, message: 'the celebrity could not be added'});
                        });
                    });
                }
                res.json({message: 'the celebrity was added successfully', celeb: result});
            }
        });
    }
}

module.exports = new celebrityService(joiSchema);