const config = require('./config/mysqlconfig');
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const app = express();
const cors = require('cors');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

const searchRouter = require("./routers/searchRouter");

app.use("/search", searchRouter);

const songRouter = require("./routers/songRouter");

app.use("/songs", songRouter);

const imageRouter = require("./routers/imageRouter");

app.use("/images", imageRouter);

const loginRouter = require("./routers/loginRouter");

app.use("/login", loginRouter);

const registrationRouter = require("./routers/registrationRouter");

app.use("/registration", registrationRouter);

const userRouter = require("./routers/userRouter");

app.use("/user", userRouter);

const genreRouter = require("./routers/genreRouter");

app.use("/genres", genreRouter);

app.get('/', function (req, res) {
    res.send('Hello World!');
    var connection = mysql.createConnection(config.config);
    connection.query("SELECT * FROM USER_ROLE", {}, function (err, results) {
        console.log(results);
        results.map(function (value) {
            console.log(value.name);
        });
    });
    console.log(config);
});

app.get('/user/authtest', function (req, res) {
    res.send({"ok": "OK"});
});

app.use(function (req, res) {
    res.status(404).send("Not Found");
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});