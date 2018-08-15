var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var UserSchema = mongoose.Schema({
    username: String,
    email: {type: String, unique: true},
    password: String,
    profilePicture: String,
    clips: [{type: mongoose.Schema.Types.ObjectId, ref: 'Clip'}],
});

UserSchema.methods.validPassword = function(password){
    return bcrypt.compareSync(password, this.password);
}
module.exports = mongoose.model('User', UserSchema);