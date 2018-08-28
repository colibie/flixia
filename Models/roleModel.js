//This schema defines the types of data that is acceptable in the roles feature
var mongoose = require('mongoose');

var RoleSchema = mongoose.Schema({
    rolename : String,
    celebrities: [{type: mongoose.Schema.Types.ObjectId, ref: 'Celebrity'}]
});

module.exports = mongoose.model('Role', RoleSchema);