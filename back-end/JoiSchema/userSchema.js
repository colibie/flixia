var Joi = require('joi');

module.exports = Joi.object().keys({
    userName: Joi.string().required(),
    email: Joi.string().email(),
    password: Joi.string().required(),
    profilePicture: Joi.any(),
});
