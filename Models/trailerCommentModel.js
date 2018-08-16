//defining the schema for a trailer comment
var mongoose = require('mongoose');

var TrailerCommentSchema = mongoose.Schema({
    time: Date,
    content: String,
    rating: Number,
    trailer: {type: mongoose.Schema.Types.ObjectId, ref: 'Trailer'},
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
})

module.exports = mongoose.model('TrailerComment', TrailerCommentSchema);