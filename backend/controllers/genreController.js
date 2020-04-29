const genreService = require('../services/genreService');
const songConverter = require('../converters/songConverter');

exports.getGenres = async function(request, response) {
    const genres = await genreService.getGenres();
    response.status(200).send(genres);
};

exports.getSongByGenreId = async function(request, response) {
    const genreId = request.params.id;
    const songs = await genreService.getSongsByGenreId(genreId);
    const songModels = songs.map(song => songConverter.convertSong(song));
    response.status(200).send(songModels);
};