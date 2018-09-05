var Joi = require('joi');

module.exports = Joi.object().keys({
    title: Joi.string().required(),
    description: Joi.string(),
    rating: Joi.number().integer().min(0).max(5),
    releaseDate: Joi.number().integer(),
    productionCompany: Joi.string(),
    duration: Joi.number().min(20).max(180),
    language: Joi.string(),
    budget: Joi.any(),
    officialSite: Joi.string(), 
    filmingLocations: Joi.any(),
    categories: Joi.any(),
    trailerCover: Joi.any().required(),
    trailerCoverId: Joi.any(),
    trailerVideo: Joi.any().required(),
    trailerVideoId: Joi.any(),
    casts: Joi.any(),
    castActedAs: Joi.any()
});
