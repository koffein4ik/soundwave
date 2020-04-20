const searchService = require('../services/searchService');

exports.search = async function(request, response) {
    const albums = (await searchService.findAlbumsInDB(request.body.searchText));
    const artists = (await searchService.findArtistsInDB(request.body.searchText));
    const songs = (await searchService.findSongsAndItsArtistsInDB(request.body.searchText));
    
    response.status(200).json({albums,artists,songs});
};





