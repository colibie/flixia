var model = require('../Models/trailerCommentModel');
var baseRepo = require('../Repositories/baseRepo'); //contains the content of module.exports

function trailerCommentRepo(){

}

trailerCommentRepo.prototype = baseRepo(model);

module.exports = new trailerCommentRepo();