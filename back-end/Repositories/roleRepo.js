var model = require('../Models/roleModel');
var baseRepo = require('../Repositories/BaseRepo'); //contains the content of module.exports

function roleRepo(){

}

roleRepo.prototype = baseRepo(model);

module.exports = new roleRepo();