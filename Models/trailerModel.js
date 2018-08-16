var mongoose = require('mongoose');

var TrailerSchema = mongoose.Schema({
    title: String,
    description: String,
    rating: Number,
    year: Number,
    productionCompany: String,
    duration: Number,
    categories: [{type: mongoose.Schema.Types.ObjectId, ref: 'Category'}],
    comments: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}]
    // trailer_video: {type: VideoTrack, unique: true},
    // movieCover: File, 
    //casts: [{name:--, role:--, etc}],
})

module.exports = mongoose.model('Trailer', TrailerSchema);