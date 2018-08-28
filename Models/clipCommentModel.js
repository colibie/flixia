var mongoose = require('mongoose');

var clipCommentSchema = mongoose.Schema({
    time : Date,
    rating : Number,
    content : String,
    clip : {type : mongoose.Schema.Types.ObjectId, ref : 'Clip'},
    user : {type : mongoose.Schema.Types.ObjectId, ref : 'User'},
});

module.exports = mongoose.model('ClipComment', clipCommentSchema);