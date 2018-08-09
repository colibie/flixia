var mongoose = require('mongoose');


var clipSchema = mongoose.Schema({
    User : {type : mongoose.Schema.Types.ObjectId, ref : User},
    time : Date,
    title : String,
    clipComment : {type : mongoose.Schema.Types.ObjectId, ref : clipComment},
    rating : Number,
    //content :

});

module.exports = mongoose.model('Clips', clipSchema);