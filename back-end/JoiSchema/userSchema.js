var Joi = require('joi');

module.exports = Joi.object().keys({
    userName: Joi.string().required(),
    email: Joi.email().required(),
    password: Joi.string().required(),
    profilePicture: Joi.any(),
});
