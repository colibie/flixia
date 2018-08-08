var mongoose = require('mongoose');


var roleSchema = mongoose.Schema({
    roleName : String,
});


module.exports = mongoose.model('Roles', roleSchema);