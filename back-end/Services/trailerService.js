var repo = require('../Models/trailerRepo');
var baseService = require('../Services/baseService'); //contains the content of module.exports

function trailerService(){
    this.structure = '-__v'
    this.populateA = {path: 'all', select: '-__v'}
    this.populateB = {path: 'all', select: '-__v'}
}
trailerService.prototype = baseService(repo);

module.exports = new trailerService();