const playlistService = require("../services/playlistService");

exports.getPlaylistByUserId = async function(request, response) {
    const playlists = await playlistService.getPlaylistsByUserId(request.headers.user_id);
    response.status(200).send(playlists);
};

exports.createPlaylist = async function(request, response) {
    const playlist = await playlistService.createPlaylist(request.body, request.headers.user_id, request.headers.host);
    response.status(201).send(playlist);
}