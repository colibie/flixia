var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var UserSchema = mongoose.Schema({
    userName: String,
    email: {type: String, unique: true},
    password: String,
    profilePicture: String,
    clips: [{type: mongoose.Schema.Types.ObjectId, ref: 'Clip'}],
});

module.exports = mongoose.model('User', UserSchema);