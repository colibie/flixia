//This section controls fetching of data and sending them to the database
var service = require('../Services/movieCategoryService');
//var category = require('../Models/movieCategoryModel');

exports.add = function(req, res){
    var data = {
        name: req.body.name 
    };
    return service.add(req, res, data);
}

exports.getAll = function(req, res){
    return service.getAll(req, res);
}

// exports.batchSendMail = function(req, res){
//     return service.batchSendMail(req, res);
// }
// exports.deleteUser = function(req, res){
//     var option = {_id: req.params.id};
//     return service.deleteUser(req, res, option);
// }

// exports.getUserByParam = function(req, res){
//     var option = req.query;
//     return service.getUsersByParam(req, res, option);
// }

// exports.updateUser = function(req, res){
//     var id = req.params.id;
//     var update = req.body;
//     return service.updateUser(req, res, id, update);    
// }

// exports.addFriend = function(req, res){
//     var user_id = req.query.user_id;
//     var friend_id = req.query.friend_id;
//     return service.addUserAsFriend(res, res, user_id, friend_id);
// }