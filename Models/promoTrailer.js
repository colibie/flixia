var mongoose = require('mongoose');

var PromoTrailerSchema = mongoose.Schema({
    title: String,
    releaseDate: Number,
    trailerId: Number,
    genre: Array,
    promoImage: String,
    promoImageId: String
});

module.exports = mongoose.model('PromoTrailer', PromoTrailerSchema);