var Joi = require('joi');

module.exports = Joi.object().keys({
    title: Joi.string().required(),
    releaseDate: Joi.any(),
    stringReleaseDate: Joi.any(),
    trailerId: Joi.string().alphanum().length(24),
    genre: Joi.any(),
    promoCover: Joi.any().required(),
    promoCoverId: Joi.any(),
});
