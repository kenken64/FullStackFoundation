// now in route.js
var fs = require('fs'),
    path = require('path'),
    multer = require ('multer'),
    storage= multer.diskStorage({
        destination: '/upload_tmp',
        filename: function (req, res, callback){
            callback(null, req.file.originalname);
        }
    }),
    upload = multer({
        storage: storage
    });

module.exports = function(app){
    app.post("/upload", upload.single("img-file"), function(req, res){
        console.log("Upload ...");
        fs.readFile(req.file.path, function(err, data){
            if(err){
                console.log("Err : ", err);
            }
            res.status(202).json({
                size: req.file.size
            })
        });
    });
}
