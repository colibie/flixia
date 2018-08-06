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

BaseRepo.prototype.add = function(data, callback){
    this.model.create(data, callback);
}

BaseRepo.prototype.getById = function(id, callback){
    this.model.findById(id, callback);
}

BaseRepo.prototype.delete = function(options, callback){
    this.model.remove(options, callback);
}

BaseRepo.prototype.update = function(id, options, callback){
    this.model.findByIdAndUpdate(id, options, callback);
}

module.exports = function(model){
    return new BaseRepo(model);
};