var model = require('../Models/appCommentModel');
var baseRepo = require('../Repositories/baseRepo'); //contains the content of module.exports

function appCommentRepo(){

}

appCommentRepo.prototype = baseRepo(model);

module.exports = new appCommentRepo();