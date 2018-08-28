var repo = require('../Repositories/trailerRepo');
var baseService = require('../Services/baseService'); //contains the content of module.exports
var joiSchema = require('../JoiSchema/trailerSchema');
var cloud = require('../Config/cloudinary');


function trailerService(joiSchema){
    //must be added for population purposes
    this.structure = '-__v';
    this.populateA = {path: 'trailerComments', select: '-__v -trailer'}; // {path: 'categories', select: '-_id -__v'}
    this.populateB = ''; //{path: 'trailerComments', select:'-trailer -__v'};
    
    //needed to define the joiSchema
    this.joiSchema = joiSchema;
}
trailerService.prototype = baseService(repo);

trailerService.prototype.deleteTrailer = function (req, res, id){
    repo.getById(id,'','','', function(err, data)
    {
       try {
           if (data != null){
            repo.delete({_id:id}, function(err, result){
                if (err) res.json({error: err, message: 'The data could not be deleted'});
                else if (result == null){
                    res.json({message: 'Resource does not exist'});
                }else{
                    cloud.deleteImage(data.trailerCoverId).then(()=>{
                        cloud.deleteVideoFile(data.trailerVideoId) 
                        res.json({message: 'Resource deleted successfully'});
                            });                  
                        }
                    });
             } else {
               res.json({message: "Trailer not found, delete not successful"});
           }
        
       } catch(exception){
            //res.json({error : err});
       }
    })        
};


module.exports = new trailerService(joiSchema);
