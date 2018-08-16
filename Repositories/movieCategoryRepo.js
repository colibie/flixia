//This section creates a Repository for the application of movie category feature
var model = require('../Models/movieCategoryModel');
var baseRepo = require('../Repositories/baseRepo');

function categoryRepo(){
    
}

categoryRepo.prototype = baseRepo(model);

module.exports = new categoryRepo();