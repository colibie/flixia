var validator = require('../JoiSchema/validator');
//creating a constructor for base Services
function BaseService(repo){
    if(!repo) throw new Error("A repo must be provided");
    this.repo = repo;
}


//can I fetch comments with a differnt route on a trailer page
//something like 'GET ALL COMMENTS WHERE TRAILER = ID,
//instead of populating, I can't seem to populate with this structure.
// BaseService.prototype.populateRepo = function(){
//     this.populateRepo.getById(data.)
// }

BaseService.prototype.add = function(req, res, data){
    var valid = validator.isValid(req, res, this.joiSchema, data);
    if (valid != null){
        res.json(valid);
    }
    else{
        this.repo.add(data, function(err, result){
            if (err) res.json({err: err, message: 'Data could not be created'});
            res.json(result);
        });
    }
}

BaseService.prototype.getAll = function(req, res){
    this.repo.get({}, this.structure, this.populateA, this.populateB, function(err, result){
        if(err) res.json({err: err, message: 'Data could not be fetched'});
        res.json(result);
    });
}

BaseService.prototype.getById = function(req, res, id){
    this.repo.getById(id, this.structure, this.populateA, this.populateB, function(err, result){
        if(err) res.json({err: err, message: 'Data could not be fetched'});
        res.json(result);
    });
}

BaseService.prototype.search = function(req, res, option){
    this.repo.get(options, this.structure, this.populateA, this.populateB, function(err, result){
        if(err) res.json({err: err, message: 'Data could not be fetched'});
        res.json(result);
    });
}

BaseService.prototype.delete = function(req, res, options){
    this.repo.delete(options, function(err){
        if(err) res.json({err: err, message: 'The data could not be deleted'});
        res.json({message: 'The data was deleted successfully'});
    });
}

BaseService.prototype.update = function(req, res, id, options){
    this.repo.update(id, options, function(err, update){
        if(err) res.json({err: err, message: `The data could not be updated`});
        res.json({message: update});
    });
}

module.exports = function(repo){
    return new BaseService(repo);
};