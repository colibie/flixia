//This is the section that takes care of all the logical functionality of adding and getting movie categories
var repo = require('../Repositories/movieCategoryRepo');
var baseService = require('../Services/baseService'); //contains the content of module.exports
var joiSchema = require('../JoiSchema/movieCategoriesSchema');


function movieCategoryService(joiSchema){
    //must be added for population purposes
    this.structure = '-__v -trailers';
    this.populateA = {path: 'trailers', select: '-__v -categories'};
    this.populateB = '';
    //needed to define the joiSchema
    this.joiSchema = joiSchema;
}

movieCategoryService.prototype = baseService(repo);

movieCategoryService.prototype.searchByCategory = function(req, res, option){
    this.repo.get(option, this.structure, this.populateA, this.populateB, function(err, result){
        try{    
            if(err) res.status(500).json({err: err, message: 'Data could not be fetched'});
            else if (result.length >= 1){
                res.json(result.tailers);
            }else{
                res.status(404).json({message: 'Not found'});
            }
        }catch(exception){
            res.status(520).json({error:exception});
        } 
    });
}

module.exports = new movieCategoryService(joiSchema);










