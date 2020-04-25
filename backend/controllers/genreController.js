const genreService = require('../services/genreService');

exports.getGenres = async function(request, response) {
    const genres = await genreService.getGenres();
    response.status(200).send(genres);
};