const databaseService = require('../dao/databaseService');

exports.getArtistInfo = async function(artistID){
    const searchResult = await databaseService.getAtristInfo(artistID);
    var result = new Object(), songsArray = [], artistsArray = [];
    var nextAlbumId, nextSongId, j = -1;
    
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
            nextSongId = searchResult[i+1].song_id
        } else {
            nextAlbumId = null
            nextSongId = null
        }
        

        artistsArray.push({
            artist_id: searchResult[i].artist_id,
            name: searchResult[i].artist_name
        });

        if(searchResult[i].song_id != nextSongId){
            const song = {
                song_id: searchResult[i].song_id,
                name: searchResult[i].song_name,
                url: searchResult[i].url,
                picture_url: searchResult[i].album_picture_url,
                artists: artistsArray
            }
            songsArray.push(song);
            result.songs.push(song);
            artistsArray = [];
        }  

        if(searchResult[i].album_id != nextAlbumId){
            result.albums.push({
                album_id: searchResult[i].album_id,
                name: searchResult[i].album_name,
                picture_url: searchResult[i].album_picture_url,
                songs: songsArray
            });
            songsArray = [];
        }
    }
    return result;
};
