const mysql = require('mysql2');
const config = require('../config/mysqlconfig');
const connection = mysql.createConnection(config.config);
const sqlQueries = require('../models/SQL');

const executeQuery = async function (query, params) {
    return (await connection.promise().query(query, params))[0];
};

exports.executeQuery = executeQuery;

exports.getPlaylistsByUserId = async function (user_id) {
     return await executeQuery(sqlQueries.FIND_PLAYLISTS_BY_USER_ID, user_id)
};