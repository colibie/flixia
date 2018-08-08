var mongoose = require('mongoose');

var clipCommentSchema = mongoose.Schema({

    clip : [{type : mongoose.Schema.Types.ObjectId, ref : 'Clips'}],
    user : [{type : mongoose.Schema.Types.ObjectId, ref : 'User'}],
    time : Date.now,
    rating : Number,
    content : String
});


module.exports = mongoose.model('ClipComments', clipCommentSchema);