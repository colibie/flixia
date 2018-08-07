var repo = require('../Repositories/trailerRepo');
var baseService = require('../Services/baseService'); //contains the content of module.exports
var joiSchema = require('../JoiSchema/trailerSchema');

function trailerService(joiSchema){
    //must be added for population purposes
    this.structure = '-__v';
    this.populateA = '';
    this.populateB = '';
    //needed to define the joiSchema
    this.joiSchema = joiSchema;
}
trailerService.prototype = baseService(repo);

module.exports = new trailerService(joiSchema);
