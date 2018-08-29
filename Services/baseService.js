var validator = require('../JoiSchema/validator');
var bcrypt = require('bcrypt');
var token = require('../Config/jwt');

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
    try{
        var valid = validator.isValid(req, res, this.joiSchema, data);
        if (valid != null){
            res.status(400).json(valid);
        }
        else{
            this.repo.add(data, function(err, result){
                if (err) {
                    if (err.code == 11000) res.status(409).json({err:err, message: 'Already taken. Pick another please'});
                    else res.status(500).json({err: err, message: 'Data could not be created'});
                }else{
                    res.json(result);
                }
            });
        }
    }catch(exception){
        res.status(520).json({error: exception});
    }
}

BaseService.prototype.getAll = function(req, res){
    try{
        this.repo.get({}, this.structure, this.populateA, this.populateB, function(err, result){
            if(err) res.status(500).json({err: err, message: 'Data could not be fetched'});
            res.json(result);
        });
    }catch(exception){
        res.status(520).json({error:exception});
    }
}

BaseService.prototype.getById = function(req, res, id){
    try{
        this.repo.getById(id, this.structure, this.populateA, this.populateB, function(err, result){
        if(err) res.json({err: err, message: 'Data could not be fetched'});
        res.json(result);
         });
    }catch(exception){
        res.status(520).json({error:exception});
    }     
}

BaseService.prototype.getByRecent = function(req, res, count){
    this.repo.getByRecent(count, {}, '-__v', function(err, result){
        if (err) res.json({err:err, message:'error, could not get latest item'});
        res.json(result);
    });
}

BaseService.prototype.search = function(req, res, option){
    try{
        this.repo.get(option, this.structure, this.populateA, this.populateB, function(err, result){
            if(err) res.status(500).json({err: err, message: 'Data could not be fetched'});
            if (result.length >= 1){
                res.json(result);
            }else{
                res.status(404).json({message: 'Not found'});
            }
                
        });
    }catch(exception){
        res.status(520).json({error:exception});
    } 
}

BaseService.prototype.delete = function(req, res, id){
    try{
        this.repo.findAndRemove(id, function(err, result){
            if (err) res.status(500).json({error: err, message: 'The data could not be deleted'});
            else if (result == null){
                res.status(400).json({message: 'Resource does not exist'});
            }else{
                res.json({message: 'Resource deleted successfully'});
            }
        });
    }catch(exception){
        res.status(520).json({error:exception});
    }        
}
    
BaseService.prototype.oldDelete = function(req, res, options){
    try{
        this.repo.delete(options, function(err){
            if(err) res.json({err: err, message: 'The data could not be deleted'});
            res.json({message: 'The data was deleted successfully'});
        });
    }catch(exception){
        res.status(520).json({err:exception});
    }    
}

BaseService.prototype.update = function(req, res, id, options){
    try{
        this.repo.update(id, options, function(err, update){
            if(err) res.json({err: err, message: `The data could not be updated`});
            res.json({message: update});
        });
    }
    catch(exception){
        res.status(520).json({error:exception})
    }    
}

BaseService.prototype.login = function(req, res, options, data){
    try{
        this.repo.get(options, '','','', function(err, result){
        if (result.length < 1){
            res.status(401).json({message: 'Email/Password is incorrect'});
        } else if(result.length >= 1){
            bcrypt.compare(data.password, result[0].password, function(err, success){
                if(err) res.status(401).json({error: err, message: 'Email/Password is incorrect'});
                else if (success) {
                    res.status(200).json({
                        message: 'Welcome and enjoy your stay',
                        token: token({
                            email: result[0].email,
                            id: result[0]._id
                        }),
                    });
                }
                else {
                    res.status(401).json({message: 'Email/Password is incorrect' });
                }
            });
            }else{
                res.status(500).json({message: 'Email/Password is incorrect'});
            }
        });
    }catch(exception){
        res.status(520).json({error: exception});
    }
}    

module.exports = function(repo){
    return new BaseService(repo);
};