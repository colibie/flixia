var repo = require('../Repositories/clipRepo');
var baseService = require('../Services/baseService'); //contains the content of module.exports
var joiSchema = require('../JoiSchema/clipSchema');

function clipService(joiSchema){
    //must be added for population purposes
    this.structure = '-__v';
    this.populateA = ''; // {path: 'categories', select: '-_id -__v'}
    this.populateB = ''; //{path: 'clipsComments', select:'-clips -__v'};
    
    //needed to define the joiSchema
    this.joiSchema = joiSchema;
}
clipService.prototype = baseService(repo);

module.exports = new clipService(joiSchema);
