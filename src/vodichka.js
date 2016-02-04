function Vodichka() {
    return {
    name: name,
    channeledObjects : [],
    makers: {},
    makeRiver: {
      to: function(obj, name) {
        self.vodichka.channeledObjects.push({object: obj, name: name});
        if(!obj.vodichka) {
          Reka(obj);
          obj.vodichkaGo();
        }
        obj.vodichka.channeledObjects.push({object: self, name: name});
      }
    },
    manageRiver: {
      requestPool: function(message, data, callback) {
        var answers = [];
        var answersPromises = [];
        var counterManager = {
          counter: 0,
          add: function(me) {me.counter++;},
          subst: function(me) {
            me.counter--;
            if (me.counter == 0) {
            callback(answers);}
          }
        }
        self.vodichka.channeledObjects.forEach(function(obj) {
          if(obj.vodichka.makers[message]) {
            obj.vodichka.makers[message].forEach(function(act) {
              counterManager.add(counterManager);
              var result = act(data);
              answersPromises.push(new Promise(function(resolve, reject) {resolve(result);}));
            })
          };
        });
        for(var i = 0; i < answersPromises.length; i++) {
          answersPromises[i].then(function(ans) {
            if(ans.then) {
                counterManager.add(counterManager);
                ans.then(function(elem) {
                  answers.push(elem);
                  counterManager.subst(counterManager);
                })
            } else {
              answers.push(ans);
              counterManager.subst(counterManager)}
            }
          )
        }
      },
      really: function(message, action) {
        if(self.vodichka.makers[message]) {
          self.vodichka.makers[message].push(action);
        }  else {
          self.vodichka.makers[message] = [];
          self.vodichka.makers[message].push(action);
        }
      },
      orly: function(message) {
        delete self.vodichka.makers[message];
      }
    }
  };
}

module.exports = Vodichka;
