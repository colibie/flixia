var Joi = require('joi');

module.exports = Joi.object().keys({
    name: Joi.string().regex(/^[a-zA-Z]+/).required(),
    email: Joi.string().email(),
    password: Joi.string.regex(/^[a-zA-Z0-9]{3,30}$/),
})
