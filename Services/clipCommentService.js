//Runs the logic with help of the base Service logic
var repo = require('../Repositories/clipCommentRepo');
var baseService = require('../Services/baseService'); //contains the content of module.exports
var joiSchema = require('../JoiSchema/clipCommentSchema');

function clipCommentService(joiSchema){
    //must be added for population purposes
    this.structure = '-__v';
    this.populateA = '';
    this.populateB = '';
    //needed to define the joiSchema
    this.joiSchema = joiSchema;
}
clipCommentService.prototype = baseService(repo);

module.exports = new clipCommentService(joiSchema);