var model = require('../Models/clipCommentModel');
var baseRepo = require('../Repositories/baseRepo'); //contains the content of module.exports

function clipCommentRepo(){

}

clipCommentRepo.prototype = baseRepo(model);

module.exports = new clipCommentRepo();