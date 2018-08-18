var mongoose = require('mongoose');

var TrailerSchema = mongoose.Schema({
    title: String,
    description: String,
    rating: Number,
    year: Number,
    productionCompany: String,
    duration: Number,
    trailerCover: String,
    trailerVideo: {type: String, unique: true},
    trailerCoverId: String,
    trailerVideoId: String,
    casts: [{type: mongoose.Schema.Types.ObjectId, ref: 'Celebrity'}],
    categories: [{type: mongoose.Schema.Types.ObjectId, ref: 'Category'}],
    trailerComments: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}],
})

module.exports = mongoose.model('Trailer', TrailerSchema);