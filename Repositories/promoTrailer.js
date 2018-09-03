var model = require('../Models/promoTrailer');
var baseRepo = require('../Repositories/baseRepo'); //contains the content of module.exports

function promoTrailerRepo(){

}

promoTrailerRepo.prototype = baseRepo(model);

module.exports = new promoTrailerRepo();