var repo = require('../Repositories/promoTrailer');
var baseService = require('../Services/baseService'); //contains the content of module.exports
var joiSchema = require('../JoiSchema/promoTrailerSchema');

function promoTrailerService(joiSchema){
    //must be added for population purposes
    this.structure = '-__v';
    this.populateA = '';//{path: 'app', select: 'title'};
    this.populateB = ''; //{path: 'promoTrailers', select:'-app -__v'};
    
    //needed to define the joiSchema
    this.joiSchema = joiSchema;

}
promoTrailerService.prototype = baseService(repo);

promoTrailerService.prototype.get = function(req, res){
    this.repo.get({}, this.structure, this.populateA, this.populateB, function(err, result){
        try{
            if(err) res.status(500).json({err: err, message: 'Data could not be fetched'});
            else{
                result.forEach(element => {
                    if (element.stringReleaseDate > Date.now()){
                        element.status = 'Coming Soon';
                    }else{
                        element.status = 'Out Now';
                    }
                });
                res.json(result)
            };
        }catch(exception){
            res.status(520).json({error:exception});
        }
    }); 
}

promoTrailerService.prototype.deleteTrailer = function (req, res, id){
    repo.getById(id,'','','', function(err, data){
       try {
           if (data != null){
            repo.delete({_id:id}, function(err, result){
                if (err) res.json({error: err, message: 'The data could not be deleted'});
                else if (result == null){
                    res.json({message: 'Resource does not exist'});
                }else{
                    cloud.deleteImage(data.promoCoverId).then(()=>{
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

promoTrailerService.prototype.searchByTitle = function(req, res, option){
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

module.exports = new promoTrailerService(joiSchema);