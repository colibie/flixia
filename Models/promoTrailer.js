var mongoose = require('mongoose');

var PromoTrailerSchema = mongoose.Schema({
    title: String,
    releaseDate: Number,
    trailerId: Number,
    genre: Array,
    promoCover: String,
    promoCoverId: String
});

module.exports = mongoose.model('PromoTrailer', PromoTrailerSchema);