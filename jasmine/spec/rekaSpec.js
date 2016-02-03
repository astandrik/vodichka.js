describe('Reka',
  function() {
    var a = {},
        b = {};

    a.vodichkaGo();
    a.vodichka.makeFlow.to(b);
    b.vodichka.manageFlow.really('govno', function(m) {return m;});

    it('emit govno zhopa', function(done) {
      a.vodichka.manageFlow.request('govno', 'zhopa', function(answer) {
          expect(answer).toEqual([{govno: 'zhopa'}]);
          done();
      });

    });
  }
);
