var Joi = require('joi');

module.exports = Joi.object().keys({
    roleName: Joi.string().required(),
   
});
