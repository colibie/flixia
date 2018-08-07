var model = require('../Models/trailerModel');
var baseRepo = require('../Repositories/BaseRepo'); //contains the content of module.exports

function trailerRepo(){

}

trailerRepo.prototype = baseRepo(model);

module.exports = new trailerRepo();