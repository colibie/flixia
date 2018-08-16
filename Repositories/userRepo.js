var model = require('../Models/userModel');
var baseRepo = require('../Repositories/BaseRepo'); //contains the content of module.exports

function userRepo(){

}

userRepo.prototype = baseRepo(model);

module.exports = new userRepo();