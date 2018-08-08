var model = require('../Models/rolesModel');
var baseRepo = require('../Repositories/BaseRepo'); //contains the content of module.exports

function rolesRepo(){

}

rolesRepo.prototype = baseRepo(model);

module.exports = new rolesRepo();