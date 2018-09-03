//Defines the propererties and functionalities we can perform with the celebrity feature
var repo = require('../Repositories/celebrityRepo');
var baseService = require('../Services/baseService'); //contains the content of module.exports
var joiSchema = require('../JoiSchema/celebritySchema');
var roleRepo = require('../Repositories/roleRepo');
var validator = require('../JoiSchema/validator');
var cloud = require('../Config/cloudinary');

function celebrityService(joiSchema){
    //must be added for population purposes
    this.structure = '-__v';
    this.populateA = {path: 'roles', select: 'name'};
    this.populateB = {path: 'trailers', select: 'name'};
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
            try {
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
            } catch (error) {
                res.json({error: error});
            }
        });
    }
}

celebrityService.prototype.deleteCelebrity = function (req, res, id){
    repo.getById(id,'','','', function(err, data){
       try {
           if (data != null){
            repo.delete({_id:id}, function(err, result){
                if (err) res.json({error: err, message: 'The data could not be deleted'});
                else if (result == null){
                    res.json({message: 'Resource does not exist'});
                }else{
                    cloud.deleteImage(data.pictureId).then(()=>{
                         cloud.deleteImage(data.thumbnailId);
                        res.json({message: 'Resource deleted successfully'});
                            });                  
                        }
                    });
            } else {
               res.json({message: "Celebrity not found, delete not successful"});
            }        
        } catch(exception){
            res.json({error : exception});
        }
    });      
};


celebrityService.prototype.searchByName = function(req, res, option){
    this.repo.get(option, this.structure, this.populateA, this.populateB, function(err, result){
        try{    
            if(err) res.status(500).json({err: err, message: 'Data could not be fetched'});
            else if (result.length >= 1){
                res.json(result);
            }else{
                res.status(404).json({message: 'Not found'});
            }
        }catch(exception){
            res.status(520).json({error:exception});
        } 
    });
}

celebrityService.prototype.updateCeleb = function(req, res, id, options){
    this.repo.update(id, options, function(err, update){
        try{
            if(err) res.json({err: err, message: `The data could not be updated`});
            else {
                if (update.roles.length > 0){
                    update.roles.forEach(element => {
                        roleRepo.getById(element,'','','', function(err, role){
                            role.celebrities.push(update._id);
                            role.save();
                            if(err) res.json({err: err, message: 'the celebrity could not be added'});
                        });
                    });
                }
                res.json({message: update})
            };
        }catch(exception){
            res.status(520).json({error:exception})
        } 
    });   
}

module.exports = new celebrityService(joiSchema);