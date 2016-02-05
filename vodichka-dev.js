var Reka =  require('./src/reka.js');
var Pool = require('./src/pool.js')
var CryptoJS = require('./node_modules/crypto-js');

var RekaWrapper = function(obj, name){
  obj.rekaGo = function() {
    var self = this;
    this.reka = Reka(self);
  };
};


var PoolWrapper = function() {
  return Pool;
};

module.exports = {RekaWrapper, PoolWrapper};
