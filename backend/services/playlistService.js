const fs = require('fs');
const moment = require('moment');
const databaseService = require("../dao/databaseService");
const songConverter = require('../converters/songConverter');

exports.getPlaylistsByUserId = async function(user_id) {
    return await databaseService.getPlaylistsByUserId(user_id);
};


exports.createPlaylist = async function(request_body, user_id, host) {
    const date = moment().format('DDMMYYYY-HHmmss');
    const imageType = request_body.picture.substring(11, request_body.picture.indexOf(';base64,'));
    const imagePath = `uploads/playlists/user_${user_id}_playlist_${date}.${imageType}`;   
    const data = request_body.picture.substring(request_body.picture.indexOf(';base64,') + 8);
    fs.writeFile(imagePath, data, 'base64', function(err){ });
    const playlist = await databaseService.createPlaylist(request_body.playlistName, user_id, `${host}/${imagePath}`);
    return playlist;
};

exports.addSongToPlaylist = async function(playlistId, songId) {
    return await databaseService.addSongToPlaylist(playlistId, songId);
};


exports.getPlaylistSongsById = async function(playlist_id){
    const searchResult = await databaseService.getPlaylistSongsById(playlist_id);
    const songsWithArtists = songConverter.getSongsWithArrayOfArtists(searchResult);
    const songsModels = songsWithArtists.map(song => songConverter.convertSong(song));
    const playlist = {
        playlist_id: searchResult[0].playlist_id,
        name: searchResult[0].playlist_name,
        userId: searchResult[0].user_id,
        shared: searchResult[0].shared,
        pictureURL: searchResult[0].playlist_picture_url
    };
    var result = new Object({
        playlist,
        songs: songsModels
    });
    return result;
};


exports.changePlaylistState = async function(playlistId, state) {
    var result = '';
    if ((state == 1) || (state == 0))
    {
        await databaseService.changePlaylistState(playlistId, state);
        result = { message: `Status was changed to ${state}`}
    } else {        
        result = { message: "invalid input"};
    }
    return result;
};

exports.getPlaylistInfo = async function(playlistId) {
    return await databaseService.getPlaylistInfo(playlistId);
};