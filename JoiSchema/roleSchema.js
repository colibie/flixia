//This schema defines what is acceptable for the roles
var Joi = require('joi');

module.exports = Joi.object().keys({
    rolename: Joi.string().required(),
});
