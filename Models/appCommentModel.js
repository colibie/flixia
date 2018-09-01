var mongoose = require('mongoose');

var appCommentSchema = mongoose.Schema({
    name : String,
    time : Date,
    content : String,
    email: {type: String, unique: true},
});

module.exports = mongoose.model('AppComment', appCommentSchema);