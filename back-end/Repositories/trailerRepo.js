//for instantiating new instances of the trailer object
var model = require('../Models/trailerModel');
var baseRepo = require('../Repository/baseRepo');

function trailerRepo(){

}

trailerRepo.prototype = baseRepo(model);

module.exports = new trailerRepo();