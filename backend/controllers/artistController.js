const searchService = require('../services/artistService');

exports.getArtistInfo = async function(request, response) {
    const artistInfo = await searchService.getArtistInfo(request.params.id);
    response.status(200).json({artistInfo});
}