coffee -c app.coffee
mv app.js lancewave.js
node_modules/forever/bin/forever start lancewave.js
