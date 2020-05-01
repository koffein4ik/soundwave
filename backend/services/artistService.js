const databaseService = require('../dao/databaseService');
const songConverter = require('../converters/songConverter');

exports.getArtistInfo = async function(artistID){
    const searchResult = await databaseService.getAtristInfo(artistID);
    var result = new Object(), songsArray = [];

    var nextAlbumId, j = -1;
    
    if (searchResult.length > 0) {
        do{
            j++;
            if (searchResult[j].artist_id == artistID){
                const artist = {
                    artist_id: artistID,
                    name: searchResult[j].artist_name,
                    picture_url: searchResult[j].artist_picture_url
                }
                result.artist = artist
            }     
        } while ((searchResult[j].artist_id != artistID) && (j < searchResult.length))
    }
    result.songs = [];
    result.albums = [];    


    for (var i = 0; i < searchResult.length; i++){
        if (i < searchResult.length - 1){
            nextAlbumId = searchResult[i+1].album_id
        } else {
            nextAlbumId = null
        }

        songsArray.push(searchResult[i]);

        if(searchResult[i].album_id != nextAlbumId){
            const songsWithArtists = songConverter.getSongsWithArrayOfArtists(songsArray);
            const songsModels = songsWithArtists.map(song => songConverter.convertSong(song));
            result.albums.push({
                album_id: searchResult[i].album_id,
                name: searchResult[i].album_name,
                picture_url: searchResult[i].album_picture_url,
                songs: songsModels
            });
            songsArray = [];
            result.songs =result.songs.concat(songsModels);
        }
    }
    return result;
};
