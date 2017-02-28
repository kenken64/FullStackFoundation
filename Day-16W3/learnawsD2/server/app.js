// now in app.js
var express = require('express');
var app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extened : false}));

app.use(express.static(_firname + "/../client"));

require("./route")(app);

app.listen(3000, function () {
  console.log("App server listening on", 3000);
});
