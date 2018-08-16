var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
    userName: String,
    email: String,
    password: String,
    profilePicture: String,
    clips: [{type: mongoose.Schema.Types.ObjectId, ref: 'Clip'}],
});

module.exports = mongoose.model('User', UserSchema);