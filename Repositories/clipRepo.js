var model = require('../Models/clipModel');
var baseRepo = require('../Repositories/baseRepo'); //contains the content of module.exports

function clipRepo(){

}

clipRepo.prototype = baseRepo(model);

module.exports = new clipRepo();