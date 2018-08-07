var Joi = require('joi');

module.exports = Joi.object().keys({
    title: Joi.string().alphanum().required(),
    description: Joi.string(),
    rating: Joi.number().integer().min(0).max(5),
    year: Joi.number().integer(),
    productionCompany: Joi.string().alphanum(),
    duration: Joi.number().min(20).max(180)
});
