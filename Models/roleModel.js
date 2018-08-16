//This schema defines the types of data that is acceptable in the roles feature
var mongoose = require('mongoose');


var RoleSchema = mongoose.Schema({
    roleName : String,
});


module.exports = mongoose.model('Role', RoleSchema);