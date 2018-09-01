//This schema defines how joi validates data
var Joi = require('joi');

module.exports = Joi.object().keys({
    content: Joi.string().required(),
    time: Joi.any(),
    email : Joi.string().email(),
    name : Joi.string(),
});
