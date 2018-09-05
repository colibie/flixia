var mongoose = require('mongoose');

var TrailerSchema = mongoose.Schema({
    title: String,
    description: String,
    rating: Number,
    releaseDate: Number,
    productionCompany: String,
    duration: Number,
    language: String,
    officialSite: String,
    filmingLocations: Array,
    budget: String,
    trailerCover: String,
    trailerVideo: {type: String, unique: true},
    trailerCoverId: String,
    trailerVideoId: String,
    casts: [{type: mongoose.Schema.Types.ObjectId, ref: 'Celebrity'}],
    castActedAs: Array,
    categories: [{type: mongoose.Schema.Types.ObjectId, ref: 'Category'}],
    trailerComments: [{type: mongoose.Schema.Types.ObjectId, ref: 'TrailerComment'}]
})

module.exports = mongoose.model('Trailer', TrailerSchema);