//This is the section that takes care of all the logical functionality of adding and getting movie categories
var repo = require('../Repositories/movieCategoryRepo');
var baseService = require('../Services/baseService'); //contains the content of module.exports
var joiSchema = require('../JoiSchema/movieCategoriesSchema');


function movieCategoryService(joiSchema){
    //must be added for population purposes
    this.structure = '-__v';
    this.populateA = {path: 'trailers', select: '-__v -categories'};
    this.populateB = '';
    //needed to define the joiSchema
    this.joiSchema = joiSchema;
}

movieCategoryService.prototype = baseService(repo);

module.exports = new movieCategoryService(joiSchema);










