var model = require('../Models/adminModel');
var baseRepo = require('../Repositories/baseRepo'); //contains the content of module.exports

function adminRepo(){

}

adminRepo.prototype = baseRepo(model);

module.exports = new adminRepo();