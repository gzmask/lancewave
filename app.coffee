express = require("express")
app = express.createServer()
app.configure ->
  app.use express.bodyParser()
  app.use express.static(__dirname + "/public")
  app.set "views", __dirname + "/views"
  app.set 'view engine', 'coffee'
  app.register '.coffee', require('coffeekup').adapters.express

app.get '/', (req, res) ->
  # Will render views/index.coffee:
  res.render 'index', foo: 'bar'

app.listen 3000
console.log "Express server started on port %s", app.address().port

