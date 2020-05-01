const databaseService = require('../dao/databaseService');
const songConverter = require('../converters/songConverter');

exports.findAlbumsInDB = async function(searchRow) {
    return await databaseService.findAlbumsInDB(searchRow);
};

exports.findArtistsInDB = async function (searchRow) {
    return await databaseService.findArtistsInDB(searchRow);
};

exports.findSongsAndItsArtistsInDB = async function(searchRow){
    const searchSongsResult = await databaseService.findSongsAndItsArtistsInDB(searchRow);
    const songsWithArtists = songConverter.getSongsWithArrayOfArtists(searchSongsResult);
    const songsModels = songsWithArtists.map(song => songConverter.convertSong(song));
    return songsModels;
};
