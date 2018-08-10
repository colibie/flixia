var mongoose = require('mongoose');

var ClipSchema = mongoose.Schema({
    user : {type : mongoose.Schema.Types.ObjectId, ref : 'User'},
    time : Date,
    title : String,
    //clipComment : {type : mongoose.Schema.Types.ObjectId, ref : clipComment},
    rating : Number,
    clipContent : String,
    description : String

});

module.exports = mongoose.model('Clip', ClipSchema);