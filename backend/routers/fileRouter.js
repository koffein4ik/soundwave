const multer  = require("multer");
const express = require("express");
const fileRouter = express.Router();
const fs = require('fs');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        if (!fs.existsSync('uploads/' + req.query.saveLocation)) {
            fs.mkdirSync('uploads/' + req.query.saveLocation);
        }
        cb(null, req.query.saveLocation + "/" + file.originalname);
    }
});

const upload = multer({storage: storage});

fileRouter.post("/", upload.single("filekey"), function (req, res) {
    console.log(req);
    let filedata = req.file;
    console.log(filedata);
    if(!filedata)
        res.sendStatus(400);
    else
        res.send({"OK":"OK"});
});

module.exports = fileRouter;