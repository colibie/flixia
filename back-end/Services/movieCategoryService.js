//This is the section that takes care of all the logical functionality of adding and getting movie categories
var repo = require('../Repositories/movieCategoryRepo');

exports.addCategory = function(req, res, data){
    repo.add(data, function(err, Category){
        if(err) res.json({err: err, message: "Something w{ent wrong, please try again"});
        res.json({message: 'Category added successfully', data: data});
    });   
}

exports.getAllCategories = function(req, res){
    repo.get({}, '-__v','', {path: 'subscribers', select: '-preferences -__v'}, function(err, Categories){
        if(err) res.json({err: err, message: 'Something went wrong'});
        res.json(Categories);
    });
}










