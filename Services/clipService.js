var repo = require('../Repositories/clipRepo');
var baseService = require('../Services/baseService'); //contains the content of module.exports
var joiSchema = require('../JoiSchema/clipSchema');
var userRepo = require('../Repositories/userRepo');
var validator = require('../JoiSchema/validator');
var cloud = require('../Config/cloudinary');

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
            try {
                if (err) {
                    if (err.code == 11000) res.status(409).json({err:err, message: 'Already taken. Pick another please'});
                    else{
                        res.status(500).json({err: err, message: 'Data could not be created'});
                    }
                }else{
                    userRepo.getById(result.user, '' , '' , '' , function(err, user){
                        if(user != null){
                            user.clips.push(result._id);
                            user.save();
                            if(err) res.json({err: err, message: 'the clip could not be added'});
                        }else{
                            res.json({message: 'User does not exist'});
                        }
                    });
                res.json({message: 'the clip was added successfully', clip: result});
                }
            } catch (error) {
                res.json({error: error});
            }   
        });
    }
}

clipService.prototype.deleteClip = function (req, res, id){
    repo.getById(id,'','','', function(err, data){
       try {
           if (data != null){
            repo.delete({_id:id}, function(err, result){
                if (err) res.json({error: err, message: 'The data could not be deleted'});
                else if (result == null){
                    res.json({message: 'Resource does not exist'});
                }else{
                        cloud.deleteVideoFile(data.clipContentId);
                        res.json({message: 'Resource deleted successfully'});
                                             
                        }
                    });
            } else {
               res.json({message: "Trailer not found, delete not successful"});
            }        
        } catch(exception){
            res.json({error : exception});
        }
    });      
};


module.exports = new clipService(joiSchema);
