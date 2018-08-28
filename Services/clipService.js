var repo = require('../Repositories/clipRepo');
var baseService = require('../Services/baseService'); //contains the content of module.exports
var joiSchema = require('../JoiSchema/clipSchema');
var userRepo = require('../Repositories/userRepo');
var validator = require('../JoiSchema/validator');

function clipService(joiSchema){
    //must be added for population purposes
    this.structure = '-__v';
    this.populateA = ''; // {path: 'categories', select: '-_id -__v'}
    this.populateB = ''; //{path: 'clipsComments', select:'-clips -__v'};
    
    //needed to define the joiSchema
    this.joiSchema = joiSchema;
}
clipService.prototype = baseService(repo);

clipService.prototype.addPopulate = function(req, res, data){
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
                userRepo.getById(result.user, '' , '' , '' , function(err, user){
                    user.clips.push(result._id);
                    user.save();
                    if(err) res.json({err: err, message: 'the clip could not be added'});
                });
            res.json({message: 'the clip was added successfully', clip: result});
            }
        });
    }
}

module.exports = new clipService(joiSchema);
