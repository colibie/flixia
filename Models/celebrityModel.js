//Defines the schema/property for a celebrity
var mongoose = require('mongoose');

var celebrityModel = mongoose.Schema({
    name : String,
    biography: String,
    dateOfBirth: Number,
    roles: [{type : mongoose.Schema.Types.ObjectId, ref: 'Role'}],
    picture: String,
    pictureId: String,
    trailers: [{type: mongoose.Schema.Types.ObjectId, ref: 'Trailer'}],
});


module.exports = mongoose.model('Celebrity', celebrityModel);