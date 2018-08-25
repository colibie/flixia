var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var AdminSchema = mongoose.Schema({
    token: String,
    username: String,
    email: {type: String, unique: true},
    password: String,
    profilePicture: String,
});

AdminSchema.methods.validPassword = function(password){
    return bcrypt.compareSync(password, this.password);
}

module.exports = mongoose.model('Admin', AdminSchema);