var Vodichka =  require('./src/vodichka.js')

var Reka = function(obj, name){
  obj.vodichkaGo = function() {
    var self = this;
    this.vodichka = Vodichka();
  };
}
