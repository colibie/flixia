//creating a constructor for base repos
function BaseRepo(model){
    if(!model) throw new Error("A model must be provided");
    this.model = model;
}

BaseRepo.prototype.get = function(option, structure, param, param1, callback){
    this.model.find(option, structure).
    populate(param).
    populate(param1).
    exec(callback);
}

BaseRepo.prototype.createAccount = function(data, callback){
    this.model.create(data, callback);
}

BaseRepo.prototype.add = function(data, callback){
    this.model.create(data, callback);
}

BaseRepo.prototype.getById = function(id, structure, param, param1, callback){
    this.model.findById(id, structure).
    populate(param).
    populate(param1).
    exec(callback);
}

BaseRepo.prototype.delete = function(options, callback){
    this.model.remove(options, callback);
}

BaseRepo.prototype.update = function(id, options, callback){
    this.model.findByIdAndUpdate(id, options, callback);
}

BaseRepo.prototype.findAndRemove = function(id, callback){
    this.model.findByIdAndRemove(id, callback);
}    

BaseRepo.prototype.getByRecent = function(param, count, options, columns, callback){
    var query = this.model.find(options, columns, {limit: count, sort: param});
    query.exec(callback);
}

BaseRepo.prototype.getOne = function(options, callback){
    this.model.findOne(options, callback);
}

module.exports = function(model){
    return new BaseRepo(model);
};