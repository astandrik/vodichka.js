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

var a = {}
Reka(a);
a.vodichkaGo()

var b = new Reka()

b.vodichkaGo()

b.vodichka.manageFlow.really('data', function() { return $.get('/WebRoles/CurrentUserRoles');});

b.vodichka.manageFlow.really('data', function() { return $.get('/WebRoles/CurrentUserRole');});

a.vodichka.makeFlow.to(b)

a.vodichka.manageFlow.request('data',null, function(ans) {console.log(ans)})
