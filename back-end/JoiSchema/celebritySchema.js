var Joi = require('joi');

module.exports = Joi.object().keys({
    name: Joi.string().required(),
    biography: Joi.string(),
    dateOfBirth: Joi.number().integer(),
    movieIndurtyRole: Joi.string(),
});
