var Joi = require('joi');

module.exports = Joi.object().keys({
    time: Joi.any(),
    content: Joi.string(),
    rating: Joi.number().integer().min(0).max(5),
    trailer: Joi.string().alphanum().length(24)
});
