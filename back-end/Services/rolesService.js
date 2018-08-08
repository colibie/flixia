//Defines the properties of the roles
var repo = require('../Repositories/rolesRepo');
var baseService = require('../Services/baseService'); //contains the content of module.exports
var joiSchema = require('../JoiSchema/rolesSchema');

function rolesService(joiSchema){
    //must be added for population purposes
    this.structure = '-__v';
    this.populateA = '';
    this.populateB = '';
    //needed to define the joiSchema
    this.joiSchema = joiSchema;
}
rolesService.prototype = baseService(repo);

module.exports = new rolesService(joiSchema);