var mongoose = require('mongoose');

var CategorySchema = mongoose.Schema({
    name: {type: String, unique: true},
    //movies: [{type: mongoose.Schema.Types.ObjectId, ref: 'Movies'}],
})

module.exports = mongoose.model('Category', CategorySchema);