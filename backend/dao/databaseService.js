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

exports.getSongsByGenreId = async function(id) {
    console.log(id);
    return await executeQuery(sqlQueries.FIND_SONGS_BY_GENRE_ID, id);
};

exports.createPlaylist = async function(name, user_id, picture_url) {
    return await executeQuery(sqlQueries.INSERT_INTO_PLAYLIST, [name, user_id, picture_url]);
};

exports.getAtristInfo = async function(artist_id) {
    return await executeQuery(sqlQueries.FIND_ALBUMS_OF_ARTIST_WITH_SONGS,artist_id);
};

exports.addSongToPlaylist = async function(playlistId, songId) {
    return await executeQuery(sqlQueries.ADD_SONG_TO_PLAYLIST, [playlistId, songId]);
};

exports.getPlaylistSongsById = async function(playlist_id) {
    return await executeQuery(sqlQueries.FIND_PLAYLIST_SONGS_BY_ID, playlist_id);
};

exports.getAlbumSongsById = async function(album_id) {
    return await executeQuery(sqlQueries.FIND_ALBUM_SONGS_BY_ID, album_id);
};
