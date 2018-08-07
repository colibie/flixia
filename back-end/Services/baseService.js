//creating a constructor for base Services
function BaseService(repo){
    if(!repo) throw new Error("A repo must be provided");
    this.repo = repo;
}

BaseService.prototype.get = function(){
    console.log(this.structure);
}
module.exports = function(repo){
    return new BaseService(repo);
};