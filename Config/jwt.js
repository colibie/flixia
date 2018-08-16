var jwt = require('jsonwebtoken');

module.exports = function(payload){
    var token = jwt.sign(payload, 'genesyslearnable', {expiresIn: '14d'});
    return token;
}