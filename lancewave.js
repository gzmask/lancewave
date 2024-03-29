(function() {
  var app, express;
  express = require('express');

  //lazyboy
  Model = require('LazyBoy');
  Model.create_connection("lancewave");
  Model.load('models');
  var User = Model('User');
  var my_user = User.where("name","Jimi", function(err,users){
    console.log(users);
  });
  //var my_user = User.create({name: "Jimi", surname: "Hendrix"});
  /*my_user.save(function(err,saved_user){
    console.log(saved_user);
  });*/


  app = express.createServer();
  app.set('views',__dirname+'/views');
  app.set('view engine', 'ejs');

  app.use(express.static(__dirname + '/public'));
  app.get('/', function(request, response) {
    return response.render('index');
  });
  app.listen(3000);
  console.log("Express server started on port %s", app.address().port);
}).call(this);
