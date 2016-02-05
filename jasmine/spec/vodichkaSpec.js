describe('Reka Go', function() {
  it('Simple reka test',
    function(done) {
      var a = {};
      var b = {}
      WaterSports.RekaWrapper(a);
      a.rekaGo()
      WaterSports.RekaWrapper(b)
      b.rekaGo();
      b.reka.manageRiver.really('data', function() {var a = 0; for(var i = 0;i < 100000000; i++) {a += i}; return(a)});
      b.reka.manageRiver.really('data', function() {var a = 0; for(var i = 0;i < 500000000; i++) {a += i}; return(a)});
      a.reka.makeRiver.to(b)
      a.reka.manageRiver.requestPool('data',null, function(ans) {
        expect(ans).toEqual([4999999950000000, 124999999567108900]);
        done();
      });
    });

    it('Pool test', function(done) {
      var pool = WaterSports.PoolWrapper().createPool();
      var b = {},
          c = {},
          d = {};

      pool.addElement(b);
      pool.addElement(c);
      pool.addElement(d);

      b.addPoolReaction('orgazm', function() {return 'sasai';});
      c.addPoolReaction('haha', function() {return 'pahom';});
      d.addPoolReaction('orgazm', function() {return 'zhopa'});

      pool.emit('orgazm','hui', function(answer) {
        expect(answer).toEqual(['sasai', 'zhopa']);
      });
    });
  }
);
