(function() {
  var app, express;
  express = require('express');

  //lazyboy
  Model = require('LazyBoy');
  Model.create_connection("lancewave");
  Model.load('models');

  app = express.createServer();
  app.set('views',__dirname+'/views');
  app.set('view engine', 'ejs');
  //app.register('.coffee', require('coffeekup'));
  //app.set('view engine', 'coffee');
  app.use(express.static(__dirname + '/public'));
  app.get('/', function(request, response) {
    return response.render('index');
  });
  app.listen(3000);
  console.log("Express server started on port %s", app.address().port);
}).call(this);
