const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
const sqlQueries = require('../models/SQL');
const mysql = require('mysql2');
const config = require('../config/mysqlconfig');
const PRIVATE_KEY = require("../config/RSA_KEY").privateKey;
const expirationTime = 3600;
const connection = mysql.createConnection(config.config);

exports.login = async function(request, response) {
    const user = (await findUserInDatabase(request.body.nickname))[0][0];
    if (user && bcrypt.compareSync(request.body.password, user.password)) {
        const login = request.body.nickname;
        const userId = user.id;
        const token = jwt.sign({ userId }, PRIVATE_KEY, {
            algorithm: 'HS256',
            expiresIn: expirationTime
        });
        response.send({login: login, userId: user.id, token: token, exp: expirationTime});
    } else {
        response.sendStatus(401);
    }
};

async function findUserInDatabase(nickname) {
    return await connection.promise().query(sqlQueries.FIND_USER_BY_NICKNAME, [nickname]);
}