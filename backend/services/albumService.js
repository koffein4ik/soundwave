const databaseService = require("../dao/databaseService");
const songConverter = require('../converters/songConverter');


exports.getAlbumSongsById = async function(album_id){
    const searchResult = await databaseService.getAlbumSongsById(album_id);
    const songsWithArtists = songConverter.getSongsWithArrayOfArtists(searchResult);
    const songsModels = songsWithArtists.map(song => songConverter.convertSong(song));
    const album = {
        album_id: searchResult[0].album_id,
        name: searchResult[0].album_name,
        artist_id: searchResult[0].album_artist_id,
        release_date: searchResult[0].release_date,
        pictureUrl: searchResult[0].album_picture_url
    }
    var result = new Object({
        album,
        songs: songsModels
    })
    return result;
}