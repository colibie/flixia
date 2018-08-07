var repo = require('../Models/trailerRepo');
var baseService = require('../Services/baseService'); //contains the content of module.exports

function trailerService(){

}
pathService('User', 'names');
trailerService.prototype = baseService(repo);

module.exports = new trailerService();