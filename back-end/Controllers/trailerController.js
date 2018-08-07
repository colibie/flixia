var service = require('../Services/trailerService');

exports.get = function(req, res){
    return service.get(req, res);
}