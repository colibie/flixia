var mongoose = require('mongoose');

var celebrityModel = mongoose.Schema({
    name : String,
    biography: String,
    dateOfBirth: Number,
    movieIndustryRole: [{type : mongoose.Schema.Types.ObjectId, ref: 'Role'}],
    picture: String,
    trailers: [{type: mongoose.Schema.Types.ObjectId, ref: 'Trailer'}],
});


module.exports = mongoose.model('Celebrity', celebrityModel);