var Joi = require('joi');

module.exports = Joi.object().keys({
    username: Joi.string(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    verified: Joi.boolean(),
    profilePicture: Joi.any(),
    profilePictureId: Joi.any(),
});
