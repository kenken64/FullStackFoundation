// This JS script is to load expressJS and path
var path = require ("path");
var expressJS = require ("express");

// This create an instance of express app
var app = expressJS();

// This is a print out the elements in process.argv
//  process.argv argv is the print out of NodeJS
// console.log(process.argv);
// //return as an array of args
// var argv = process.argv;
// for(var x =0; x < argv.length; x++){
//   console.log(" %d args is %s", x, argv[x]);
// }

// ---------------------------------
// var strPort = process.argv[2];

// if (!strPort){
//     port = 3000;
// }else{
//     port = parseInt(strPort);

// }

// create the web server directory to public
app.use( expressJS.static(__dirname + "/public") );
// this inculded images on the web server also - BUT OPTIONAL!!
app.use( expressJS.static(__dirname + "/img") );

// this is application of Node JS to set the port to 3000
// Config of the Node JS port to ?
app.set ("port", (parseInt(process.argv[2]) || parseInt(process.env.APP_PORT) || 3000));

   // console.log("strPort: %s",typeof strPort);
   // console.log("port: %s, type=%s ", port, typeof port);

// This config is to ask the server to listening at which **** port
app.listen(app.get("port"));
