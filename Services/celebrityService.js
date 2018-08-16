//Defines the propererties and functionalities we can perform with the celebrity feature
var repo = require('../Repositories/celebrityRepo');
var baseService = require('../Services/baseService'); //contains the content of module.exports
var joiSchema = require('../JoiSchema/celebritySchema');

function celebrityService(joiSchema){
    //must be added for population purposes
    this.structure = '-__v';
    this.populateA = '';
    this.populateB = '';
    //needed to define the joiSchema
    this.joiSchema = joiSchema;
}
celebrityService.prototype = baseService(repo);

module.exports = new celebrityService(joiSchema);