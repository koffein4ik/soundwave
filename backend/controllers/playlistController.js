const playlistService = require("../services/playlistService");

exports.getPlaylistByUserId = async function(request, response) {
    const playlists = await playlistService.getPlaylistsByUserId(request.headers.user_id);
    response.status(200).send(playlists);
};