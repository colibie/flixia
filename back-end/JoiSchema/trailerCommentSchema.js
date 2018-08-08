var Joi = require('joi');

module.exports = Joi.object().keys({
    time: Joi.any(),
    description: Joi.string(),
    rating: Joi.number().integer().min(0).max(5),
    year: Joi.number().integer(),
    trailer: Joi.string().alphanum().length(24)
});
