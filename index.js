
 const Names = require('./modules/names')
function Faker (opts) {
    let self = this;
    opts = opts || {};
    self.names  = new Names() 
}
module.exports = new Faker()