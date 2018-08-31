var mongoose = require('mongoose');

var ClipSchema = mongoose.Schema({
    user : {type : mongoose.Schema.Types.ObjectId, ref : 'User'},
    time : Number,
    title : String,
    rating : Number,
    clipContent : String,
    clipContentId: String,
    description : String,
    clipComment : [{type : mongoose.Schema.Types.ObjectId, ref : 'clipComment'}],
});

module.exports = mongoose.model('Clip', ClipSchema);