var repo = require('../Repositories/trailerRepo');
var baseService = require('../Services/baseService'); //contains the content of module.exports
var joiSchema = require('../JoiSchema/trailerSchema');
var categoryRepo = require('../Repositories/movieCategoryRepo');
var validator = require('../JoiSchema/validator');

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
            if (err) {
                if (err.code == 11000) res.status(409).json({err:err, message: 'Already taken. Pick another please'});
                else{
                    res.status(500).json({err: err, message: 'Data could not be created'});
                }
            }else{
                result.categories.forEach(element => {
                    categoryRepo.getById(element,'','','', function(err, category){
                        category.trailers.push(result._id);
                        category.save();
                        if(err) res.json({err: err, message: 'the trailer could not be added'});
                    });
                });
                res.json({message: 'the trailer was added successfully', movie: result});
                }
        });
    }
}

module.exports = new trailerService(joiSchema);
