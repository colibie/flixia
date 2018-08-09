var Joi = require('joi');

module.exports = Joi.object().keys({
    title: Joi.string().required(),
    clipComment: Joi.string().length(24),
    rating: Joi.number().integer().min(0).max(5),
   // User: Joi.string().length(24).required,
    time: Joi.any(),
   // content: Joi.any().required(),
});
