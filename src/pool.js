var encrypter = function(message, key) {
  return CryptoJS.AES.encrypt(message,key);
};

var decrypter = function(encrypted, key) {
  return  CryptoJS.AES.decrypt(encrypted, key).toString(CryptoJS.enc.Utf8) || null;
}

var CryptoJS = require('../node_modules/crypto-js');

module.exports = {
  pool : {},
  createPool: function() {
    this.pool = {elements: []};
    return this;
  },
  addElement: function(obj) {
    if(!this.pool.elements) throw("Pool has to be created first!");
    this.pool.elements.push(obj);
    obj.say = this.emit;
    obj.reactions = [];
    obj.addPoolReaction = function(key, action) {
      obj.reactions.push({key, action});
    };
  },
  emit:function(message, data, callback) {
    message = encrypter(message, message);
    WaterSports.RekaWrapper(this);
    this.rekaGo();
    var self = this;
    this.pool.elements.forEach(elem => {
      self.reka.makeRiver.to(elem);
      var bootstrapMessage = '123321';
      WaterSports.RekaWrapper(elem);
      elem.rekaGo();
      elem.reka.manageRiver.really(bootstrapMessage, function() {
        var answer = [];
        elem.reactions.forEach(react => {
          if(decrypter(message,react.key)) {
            answer.push(react.action(data));
          } else {
            return null;
          }
        });
        return answer;
      });
      self.reka.manageRiver.requestPool(bootstrapMessage, data, callback);
    });
  }
};
