var repo = require('../Repositories/movieCategoryRepo');
//var subscriberRepo = require('../Repository/SubscriberRepo');
//var subscriberService = require('../Services/SubscriberService');

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

// exports.batchSendMail = function(req, res){
//     repo.getById(id, function(err, category){
//         if (err) res.json('Could not send mail. Try again');
//         else{
//             subscriberService.sendMail(req, res, category.subscribers);
//             res.json('Mail sent successfully');
//         }
//     });
// }









