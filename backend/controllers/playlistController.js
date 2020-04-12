const playlistService = require("../services/playlistService");

exports.getPlaylistByUserId = async function(request, response) {
    const playlists = await playlistService.getPlaylistsByUserId(request.headers.user_id);
    console.log(playlists);
    response.status(200).send(playlists);
};