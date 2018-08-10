var Joi = require('joi');

module.exports = Joi.object().keys({
    title: Joi.string().required(),
    clipComment: Joi.string().length(24),
    rating: Joi.number().integer().min(0).max(5),
    description : Joi.string().required(),
    user: Joi.string().length(24).required,
    time: Joi.any(),
    clipContent: Joi.any().required(),
});
