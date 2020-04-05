var config = require('./config/mysqlconfig');
var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql2');
var app = express();
var session = require('express-session');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function (req, res, next) {
//Enabling CORS
    app.use(bodyParser.urlencoded({ extended: true }));
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
    next();
});

const searchRouter = require("./routers/searchRouter");

app.use("/search", searchRouter);

const songRouter = require("./routers/songRouter");

app.use("/songs", songRouter);

app.get('/', function (req, res) {
    res.send('Hello World!');
    var connection = mysql.createConnection(config.config);
    connection.query("SELECT * FROM USER_ROLE", {}, function (err, results) {
        results.map(function(value) {
            console.log(value.name);
        });
    });
    console.log(config);
});

app.post('/registration', function(req, res) {
   console.log(req.body);
});

app.use(function (req, res, next) {
    res.status(404).send("Not Found")
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});