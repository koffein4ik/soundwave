const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
const sqlQueries = require('../models/SQL');
const mysql = require('mysql2');
const config = require('../config/mysqlconfig');
const PRIVATE_KEY = require("../config/RSA_KEY").privateKey;
const expirationTime = 3600;
const connection = mysql.createConnection(config.config);

exports.login = function(request, response) {
    if (validateUserData(request.body)) {
        const login = request.body.nickname;
        const token = jwt.sign({ login }, PRIVATE_KEY, {
            algorithm: 'HS256',
            expiresIn: expirationTime
        });
        response.send({login: login, token: token, exp: expirationTime});
    } else {
        response.sendStatus(401);
    }
};

async function validateUserData(userData) {
    let found = false;
    await connection.promise().query(sqlQueries.FIND_USER_BY_NICKNAME, [userData.nickname], function(err, result) {
        if (result) {
            found = bcrypt.compareSync(userData.password, result[0].password);
        }
    });
    return found;
}