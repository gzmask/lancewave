express = require("express")
app = express.createServer()
app.configure ->
  app.use express.bodyParser()
  app.use express.static(__dirname + "/public")
  app.set "views", __dirname + "/views"

app.listen 3000
console.log "Express server started on port %s", app.address().port

