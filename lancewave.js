(function() {
  var app, express;
  express = require('express');
  app = express.createServer();
  app.register('.coffee', require('coffeekup'));
  app.set('view engine', 'coffee');
  app.use(express.static(__dirname + '/public'));
  app.get('/', function(request, response) {
    return response.render('index');
  });
  app.listen(3000);
  console.log("Express server started on port %s", app.address().port);
}).call(this);
