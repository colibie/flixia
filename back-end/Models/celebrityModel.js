var mongoose = require('mongoose');

var celebrityModel = mongoose.Schema({
    name : String,
    biography: String,
    dateOfBirth: Number,
    //movieIndustryRole: [{type : mongoose.Schema.Types.ObjectId, ref: 'Roles'}],
    //picture: String,
    //trailers: [{type: mongoose.Schema.Types.ObjectId, ref: 'Trailers'}],
});


module.export = mongoose.model('Celebrity', celebrityModel);