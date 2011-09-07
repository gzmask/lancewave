(function() {
  var app, express;
  express = require("express");
  app = express.createServer();
  app.configure(function() {
    app.use(express.bodyParser());
    app.use(express.static(__dirname + "/public"));
    return app.set("views", __dirname + "/views");
  });
  app.listen(3000);
  console.log("Express server started on port %s", app.address().port);
}).call(this);
