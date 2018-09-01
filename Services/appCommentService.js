var repo = require('../Repositories/appCommentRepo');
var baseService = require('../Services/baseService'); //contains the content of module.exports
var joiSchema = require('../JoiSchema/appCommentSchema');
//var validator = require('../JoiSchema/validator');

function appCommentService(joiSchema, populateRepo){
    //must be added for population purposes
    this.structure = '-__v';
    this.populateA = '';//{path: 'app', select: 'title'};
    this.populateB = ''; //{path: 'appComments', select:'-app -__v'};
    
    //needed to define the joiSchema
    this.joiSchema = joiSchema;

    //for population purposes
    this.populateRepo = populateRepo;
}
appCommentService.prototype = baseService(repo);


module.exports = new appCommentService(joiSchema);