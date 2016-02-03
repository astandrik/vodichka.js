Object.prototype.vodichkaGo = function() {
  var self = this;
  this.vodichka = {
    channeledObjects : [],
    makers: {},
    makeFlow: {
      to: function(obj) {
        self.vodichka.channeledObjects.push(obj);
        if(!obj.vodichka) {
          obj.vodichkaGo();
        }
        obj.vodichka.channeledObjects.push(self);
      }
    },
    manageFlow: {
      request: function(message, data, callback) {
        var answers = [];
        var answersPromises = [];
        var counterManager = {
          counter: 0,
          add: (me) => {me.counter++;},
          subst: (me) => {
            me.counter--;
            console.log(me);
            if (me.counter == 0) {
            callback(answers);}
          }
        }
        self.vodichka.channeledObjects.forEach((obj) => {
          if(obj.vodichka.makers[message]) {
            counterManager.add(counterManager);
            answersPromises.push(new Promise(function(resolve, reject) {resolve(obj.vodichka.makers[message](data));}));
          };
        });
        answersPromises.forEach((item) => {
          item.then(function(data) {
            answers.push(data);
            counterManager.subst(counterManager)})
        })
      },
      really: function(message, action) {
        self.vodichka.makers[message] = action;
      },
      orly: function(message) {
        delete self.vodichka.makers[message];
      }
    }
  };
};
