function Reka(self) {
    return {
    name: name,
    channeledObjects : [],
    makers: {},
    makeRiver: {
      to: function(obj, name) {
        self.reka.channeledObjects.push({object: obj, name: name});
        if(!obj.reka) {
          WaterSports.RekaWrapper(obj);
          obj.rekaGo();
        }
        obj.reka.channeledObjects.push({object: self, name: name});
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
        self.reka.channeledObjects.forEach(function(obj) {
          if(obj.object.reka.makers[message]) {
            obj.object.reka.makers[message].forEach(function(act) {
              counterManager.add(counterManager);
              var result = act(data);
              answersPromises.push(new Promise(function(resolve, reject) {
                resolve(result);
              }));
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
        if(self.reka.makers[message]) {
          self.reka.makers[message].push(action);
        }  else {
          self.reka.makers[message] = [];
          self.reka.makers[message].push(action);
        }
      },
      orly: function(message) {
        delete self.reka.makers[message];
      }
    }
  };
}

module.exports = Reka;
