var mongoose = require('mongoose');

var TrailerSchema = mongoose.Schema({
    title: String,
    // trailer_video: {type: VideoTrack, unique: true},
    description: String,
    rating: Number,
    year: Number,
    productionCompany: String,
    duration: Number,
    // movieCover: File, 
    //casts: [{name:--, role:--, etc}],
    categories: [{type: mongoose.Schema.Types.ObjectId, ref: 'Category'}],
    comments: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}]
})

module.exports = mongoose.model('Trailer', TrailerSchema);