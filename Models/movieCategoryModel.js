//This is the schema that defines how the movie categories are represented in the database
var mongoose = require('mongoose');

var CategorySchema = mongoose.Schema({
    name: {type: String, unique: true},
    //trailers: [{type: mongoose.Schema.Types.ObjectId, ref: 'Trailers'}],
})

module.exports = mongoose.model('Category', CategorySchema);