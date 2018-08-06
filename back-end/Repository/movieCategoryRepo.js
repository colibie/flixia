var model = require('../Models/movieCategoryModel');
var baseRepo = require('../Repository/BaseRepo');

function categoryRepo(){
    
}

categoryRepo.prototype = baseRepo(model);

module.exports = new categoryRepo();