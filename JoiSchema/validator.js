const joi = require('joi');
const joiToForms = require('joi-errors-for-forms').form;

const convertToForms = joiToForms();
const joiOptions = { convert: true, abortEarly: false };

exports.isValid = function(req ,res ,schema ,values){
    return joi.validate(values, schema, joiOptions, (errs, convertedValues) => {
        if(errs) return convertToForms(errs);
        return null;
      });
}  
