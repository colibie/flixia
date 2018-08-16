var model = require('../Models/celebrityModel');
var baseRepo = require('../Repositories/baseRepo'); //contains the content of module.exports

function celebrityRepo(){

}

celebrityRepo.prototype = baseRepo(model);

module.exports = new celebrityRepo();