var repo = require('../Repositories/clipsRepo');
var baseService = require('../Services/baseService'); //contains the content of module.exports
var joiSchema = require('../JoiSchema/clipsSchema');

function clipsService(joiSchema){
    //must be added for population purposes
    this.structure = '-__v';
    this.populateA = ''; // {path: 'categories', select: '-_id -__v'}
    this.populateB = ''; //{path: 'clipsComments', select:'-clips -__v'};
    
    //needed to define the joiSchema
    this.joiSchema = joiSchema;
}
clipsService.prototype = baseService(repo);

module.exports = new clipsService(joiSchema);
