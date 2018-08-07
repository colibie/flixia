var repo = require('../Repositories/trailerRepo');
var baseService = require('../Services/baseService'); //contains the content of module.exports

function trailerService(){
    this.structure = '-__v';
    this.populateA = '';
    this.populateB = '';
}
trailerService.prototype = baseService(repo);

module.exports = new trailerService();