const mysql = require('mysql2');
const config = require('../config/mysqlconfig');
const connection = mysql.createConnection(config.config);
const sqlQueries = require('../models/SQL');

const executeQuery = async function (query, params) {
    return (await connection.promise().query(query, params))[0];
};

exports.executeQuery = executeQuery;

exports.getPlaylistsByUserId = async function (user_id) {
    return await executeQuery(sqlQueries.FIND_PLAYLISTS_BY_USER_ID, user_id);
};

exports.findAlbumsInDB = async function (searchRow) {
    return await executeQuery(sqlQueries.FIND_ALBOMS_BY_NAME, [`%${searchRow}%`]);
};

exports.findArtistsInDB = async function (searchRow){
    return await executeQuery(sqlQueries.FIND_ARTISTS_BY_NAME, [`%${searchRow}%`]);
};

exports.findSongsAndItsArtistsInDB = async function (searchRow){
    return await executeQuery(sqlQueries.FIND_SONGS_BY_NAME_WITH_ITS_ARTISTS, [`%${searchRow}%`]);
};

exports.findAllGenres = async function() {
    return await executeQuery(sqlQueries.FIND_ALL_GENRES);
};

exports.createPlaylist = async function(name, user_id, picture_url) {
    return await executeQuery(sqlQueries.INSERT_INTO_PLAYLIST, [name, user_id, picture_url]);
}

