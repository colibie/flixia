//Runs the logic with help of the base Service logic
var repo = require('../Repositories/clipCommentRepo');
var baseService = require('../Services/baseService'); //contains the content of module.exports
var joiSchema = require('../JoiSchema/clipCommentSchema');
var clipRepo = require('../Repositories/clipRepo');
var validator = require('../JoiSchema/validator');

function clipCommentService(joiSchema){
    //must be added for population purposes
    this.structure = '-__v';
    this.populateA = {path: 'clip', select: 'title'};
    this.populateB = {path: 'user', select: 'username'};
    //needed to define the joiSchema
    this.joiSchema = joiSchema;
}
clipCommentService.prototype = baseService(repo);

clipCommentService.prototype.addPopulate = function(req, res, data){
    var valid = validator.isValid(req, res, this.joiSchema, data);
    if (valid != null){
        res.status(400).json(valid);
    }
    else{
        repo.add(data, function(err, result){
            if (err) {
                if (err.code == 11000) res.status(409).json({err:err, message: 'Already taken. Pick another please'});
                else{
                    res.status(500).json({err: err, message: 'Data could not be created'});
                }
            }else{
                clipRepo.getById(result.clip, '' , '' , '' , function(err, clip){
                    clip.clipComments.push(result._id);
                    clip.save();
                    if(err) res.status(500).json({err: err, message: 'the comment could not be added'});
                });
            res.json({message: 'the comment was added successfully', comment: result});
            }
        });
    }
}

module.exports = new clipCommentService(joiSchema);