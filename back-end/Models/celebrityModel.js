//Defines the schema/property for a celebrity
var mongoose = require('mongoose');

var celebrityModel = mongoose.Schema({
    name : String,
    biography: String,
    dateOfBirth: Number,
    //movieIndustryRole: [{type : mongoose.Schema.Types.ObjectId, ref: 'Roles'}],
    //picture: String,
    //trailers: [{type: mongoose.Schema.Types.ObjectId, ref: 'Trailers'}],
});


module.exports = mongoose.model('Celebrity', celebrityModel);