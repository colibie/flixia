var repo = require('../Repositories/trailerCommentRepo');
var trailerRepo = require('../Repositories/trailerRepo');
var baseService = require('../Services/baseService'); //contains the content of module.exports
var joiSchema = require('../JoiSchema/trailerCommentSchema');

function trailerCommentService(joiSchema, populateRepo){
    //must be added for population purposes
    this.structure = '-__v';
    this.populateA = {path: 'trailer', select: '_id title'};
    this.populateB = ''; //{path: 'trailerComments', select:'-trailer -__v'};
    
    //needed to define the joiSchema
    this.joiSchema = joiSchema;

    //for population purposes
    this.populateRepo = populateRepo;
}
trailerCommentService.prototype = baseService(repo);

module.exports = new trailerCommentService(joiSchema, trailerRepo);
