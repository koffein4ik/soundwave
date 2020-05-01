const albumService = require("../services/albumService");

exports.getAlbumSongsById = async function(request, response) {
    const albumSongs = await albumService.getAlbumSongsById(request.params.id);
    response.status(200).send(albumSongs)
}; 