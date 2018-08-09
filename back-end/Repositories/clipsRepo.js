var model = require('../Models/clipsModel');
var baseRepo = require('../Repositories/BaseRepo'); //contains the content of module.exports

function clipsRepo(){

}

clipsRepo.prototype = baseRepo(model);

module.exports = new clipsRepo();