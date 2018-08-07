var repo = require('../Repositories/trailerRepo');
var baseService = require('../Services/baseService'); //contains the content of module.exports
var schema = require('../JoiSchema/trailerSchema');

function trailerService(schema){
    this.structure = '-__v';
    this.populateA = '';
    this.populateB = '';
    this.schema = schema;
}
trailerService.prototype = baseService(repo);

module.exports = new trailerService(schema);