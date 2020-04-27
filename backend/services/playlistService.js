const fs = require('fs');
const moment = require('moment');
const databaseService = require("../dao/databaseService");

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