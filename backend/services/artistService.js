const databaseService = require('../dao/databaseService');

exports.getArtistInfo = async function(artistID){
    const searchResult = await databaseService.getAtristInfo(artistID);
    var result = [], songsArray = [], artistsArray = [];
    var nextAlbumId, nextSongId, j = -1;

    do{
        j++;
        if (searchResult[j].artist_id == artistID)
        {
            result.push({
                artist_id: artistID,
                name: searchResult[j].artist_name,
                picture_url: searchResult[j].artist_picture_url
            })
        }     
    } while (searchResult[j].artist_id != artistID)

    for (var i = 0; i < searchResult.length; i++){
        try {nextAlbumId = searchResult[i+1].album_id} 
        catch {nextAlbumId = null};

        try {nextSongId = searchResult[i+1].song_id}
        catch {nextSongId = null};

        artistsArray.push({
            artist_id: searchResult[i].artist_id,
            name: searchResult[i].artist_name
        });

        if(searchResult[i].song_id != nextSongId){
            songsArray.push({
                song_id: searchResult[i].song_id,
                name: searchResult[i].song_name,
                url: searchResult[i].url,
                picture_url: searchResult[i].album_picture_url,
                artists: artistsArray
            });
            artistsArray = [];
        }  

        if(searchResult[i].album_id != nextAlbumId){
            result.push({
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
