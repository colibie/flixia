//This schema defines how joi validates data
var Joi = require('joi');

module.exports = Joi.object().keys({
    content: Joi.string().required(),
    rating: Joi.number().integer().min(0).max(5),
    time: Joi.any()
});
