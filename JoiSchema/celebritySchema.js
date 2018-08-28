//Defines how we use joi to validate our properties
var Joi = require('joi');

module.exports = Joi.object().keys({
    name: Joi.string().required(),
    biography: Joi.string(),
    dateOfBirth: Joi.number().integer(),
    picture : Joi.string(),
    pictureId: Joi.any(),
    roles: Joi.array(),
});
