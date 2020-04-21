const databaseService = require('../dao/databaseService');

exports.findAlbumsInDB = async function(searchRow) {
    return await databaseService.findAlbumsInDB(searchRow);
};

exports.findArtistsInDB = async function (searchRow) {
    return await databaseService.findArtistsInDB(searchRow);
};

exports.findSongsAndItsArtistsInDB = async function(searchRow){
    const searchSongsResult = await databaseService.findSongsAndItsArtistsInDB(searchRow);
    var result = [], artistsArray = [];
    var nextSongId;
    for (var i =0; i < searchSongsResult.length; i++){
        try { nextSongId = searchSongsResult[i+1].song_id } 
        catch { nextSongId = null };

        artistsArray.push({
            artist_id: searchSongsResult[i].artist_id,
            name: searchSongsResult[i].artist_name
        });
        
        if(searchSongsResult[i].song_id != nextSongId){
            result.push({
                song_id: searchSongsResult[i].song_id,
                name: searchSongsResult[i].song_name,
                url: searchSongsResult[i].url,
                picture_url: searchSongsResult[i].picture_url,
                artists: artistsArray
            });
            artistsArray = [];
        }  
    }  
    return result;
};
