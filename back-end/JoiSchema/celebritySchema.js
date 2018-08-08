var Joi = require('joi');

module.exports = Joi.object().keys({
    name: Joi.string().required(),
    biography: Joi.string(),
    dob: Joi.number().integer(), //dob stands for date of birth
    //movieIndurtyRole: Joi.string(),
});
