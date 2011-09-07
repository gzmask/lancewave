(function() {
  var app, express;
  express = require("express");
  app = express.createServer();
  app.configure(function() {
    app.use(express.bodyParser());
    app.use(express.static(__dirname + "/public"));
    app.set("views", __dirname + "/views");
    app.set('view engine', 'coffee');
    return app.register('.coffee', require('coffeekup').adapters.express);
  });
  app.get('/', function(req, res) {
    return res.render('index', {
      foo: 'bar'
    });
  });
  app.listen(3000);
  console.log("Express server started on port %s", app.address().port);
}).call(this);
