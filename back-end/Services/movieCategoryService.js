//This is the section that takes care of all the logical functionality of adding and getting movie categories
var repo = require('../Repositories/movieCategoryRepo');
var baseService = require('../Services/baseService'); //contains the content of module.exports
var joiSchema = require('../JoiSchema/movieCategoriesSchema');


function movieCategoryService(JoiSchema){
    //must be added for population purposes
    this.structure = '-__v';
    this.populateA = '';
    this.populateB = '';
    //needed to define the joiSchema
    this.joiSchema = joiSchema;
}

movieCategoryService.prototype = baseService(repo);

module.exports = new movieCategoryService(joiSchema);


// exports.addCategory = function(req, res, data){
//     repo.add(data, function(err, Category){
//         if(err) res.json({err: err, message: "Something w{ent wrong, please try again"});
//         res.json({message: 'Category added successfully', data: data});
//     });   
// }

// exports.getAllCategories = function(req, res){
//     repo.get({}, '-__v','', {path: 'subscribers', select: '-preferences -__v'}, function(err, Categories){
//         if(err) res.json({err: err, message: 'Something went wrong'});
//         res.json(Categories);
//     });
// }










