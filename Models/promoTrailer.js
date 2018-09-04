var mongoose = require('mongoose');

var PromoTrailerSchema = mongoose.Schema({
    title: {type: String, unique: true},
    releaseDate: String,
    stringReleaseDate: Date,
    trailerId: {type: mongoose.Schema.Types.ObjectId, ref: 'Trailer'},
    genre: Array,
    promoCover: String,
    promoCoverId: String,
    status: String
});

module.exports = mongoose.model('PromoTrailer', PromoTrailerSchema);