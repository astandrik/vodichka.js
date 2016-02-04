describe('Reka Go', function() {
  it('Go vodichkaaa!',
    function(done) {
      var a = {};
      var b = {}
      Reka(a);
      a.vodichkaGo()
      Reka(b)
      b.vodichkaGo();
      b.vodichka.manageRiver.really('data', function() {var a = 0; for(var i = 0;i < 100000000; i++) {a += i}; return(a)});
      b.vodichka.manageRiver.really('data', function() {var a = 0; for(var i = 0;i < 500000000; i++) {a += i}; return(a)});
      a.vodichka.makeRiver.to(b)
      a.vodichka.manageRiver.requestPool('data',null, function(ans) {
        expect(ans).toEqual([4999999950000000, 124999999567108900]);
        done();
      });
    })
  }
);
