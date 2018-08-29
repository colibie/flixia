var Joi = require('joi');

module.exports = Joi.object().keys({
    title: Joi.string().required(),
    description: Joi.string(),
    rating: Joi.number().integer().min(0).max(5),
    releaseDate: Joi.number().integer(),
    productionCompany: Joi.string(),
    duration: Joi.number().min(20).max(180),
    category: Joi.string(),
    trailerCover: Joi.any().required(),
    trailerCoverId: Joi.any(),
    trailerVideo: Joi.any().required(),
    trailerVideoId: Joi.any()
});
