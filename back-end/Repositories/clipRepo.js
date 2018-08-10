var model = require('../Models/clipModel');
var baseRepo = require('../Repositories/BaseRepo'); //contains the content of module.exports

function clipRepo(){

}

clipRepo.prototype = baseRepo(model);

module.exports = new clipRepo();