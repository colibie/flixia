var repo = require('../Repositories/trailerRepo');
var baseService = require('../Services/baseService'); //contains the content of module.exports
var joiSchema = require('../JoiSchema/trailerSchema');
var categoryRepo = require('../Repositories/movieCategoryRepo');
var validator = require('../JoiSchema/validator');
var cloud = require('../Config/cloudinary');

function trailerService(joiSchema){
    //must be added for population purposes
    this.structure = '-__v';
    this.populateA = {path: 'trailerComments', select: '-__v -trailer'}; // {path: 'categories', select: '-_id -__v'}
    this.populateB = {path: 'categories', select: 'name'}; //{path: 'trailerComments', select:'-trailer -__v'};
    
    //needed to define the joiSchema
    this.joiSchema = joiSchema;
}
trailerService.prototype = baseService(repo);

trailerService.prototype.addPopulate = function(req, res, data){
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
                    if (result.categories.length > 0){
                        result.categories.forEach(element => {
                            categoryRepo.getById(element,'','','', function(err, category){
                                category.trailers.push(result._id);
                                category.save();
                                if(err) res.json({err: err, message: 'the trailer could not be added'});
                            });
                        });
                    }
                    res.json({message: 'the trailer was added successfully', movie: result});
                }            
            } catch (error) {
                res.json({error: error});
            }
        });
    }
}

trailerService.prototype.deleteTrailer = function (req, res, id){
    repo.getById(id,'','','', function(err, data){
       try {
           if (data != null){
            repo.delete({_id:id}, function(err, result){
                if (err) res.json({error: err, message: 'The data could not be deleted'});
                else if (result == null){
                    res.json({message: 'Resource does not exist'});
                }else{
                    cloud.deleteImage(data.trailerCoverId).then(()=>{
                        cloud.deleteVideoFile(data.trailerVideoId);
                        res.json({message: 'Resource deleted successfully'});
                            });                  
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

trailerService.prototype.searchByTitle = function(req, res, option){
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

module.exports = new trailerService(joiSchema);
