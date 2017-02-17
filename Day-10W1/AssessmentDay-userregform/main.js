// This JS script is to load expressJS and path
var path = require ("path");
var express = require ("express");
// var bodyParser = require('body-parser');

// This create an instance of express app
var app = express();

// set the directory of the publick folder
app.use(express.static(__dirname + "/public") );
app.use(express.static(__dirname + "/bower_components") );

//Configure the port
app.set("port", process.env.APP_PORR | 3000);
  console.log("Express server listening on port 3000");

//Start the expressjs server
app.listen(app.get("port"), function() {
    console.log("Application started at %s on port %d"
            , new Date(), app.get("port"));
});
