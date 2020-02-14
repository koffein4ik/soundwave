var config = require('./config/mysqlconfig');
var express = require('express');
var mysql = require('mysql2');
var app = express();

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

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});