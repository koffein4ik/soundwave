const bcrypt = require('bcrypt');
const salt = bcrypt.genSaltSync(10);
const sqlQueries = require('../models/SQL');
const mysql = require('mysql2');
const config = require('../config/mysqlconfig');
const connection = mysql.createConnection(config.config);

exports.register = function(request, response) {
    console.log(request.body);
    let user = {
        name: request.body.name,
        surname: request.body.surname,
        nickname: request.body.nickname,
        password: bcrypt.hashSync(request.body.password, salt),
        userRoleId: 1
    };
    connection.query(sqlQueries.INSERT_INTO_USERS, [user.name, user.surname, user.nickname, user.password,
        user.userRoleId], function(err, result) {
            if (err) {
                console.log(err);
                //TODO Add error handling
            }
            console.log(result);
    });
    response.status(200).send({"result": "SUCCESS"});

};