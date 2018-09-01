var mongoose = require('mongoose');

var appCommentSchema = mongoose.Schema({
    name : String,
    time : Date,
    content : String,
    email: String,
});

module.exports = mongoose.model('AppComment', appCommentSchema);