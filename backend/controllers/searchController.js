const mysql = require('mysql2');
const config = require('../config/mysqlconfig');
const sqlQueries = require('../models/SQL');
const expirationTime = 3600;
const connection = mysql.createConnection(config.config);

exports.search = async function(request, response) {
    const albums = (await findAlbumsInDB(request.body.searchText))[0];
    const artists = (await findArtistsInDB(request.body.searchText))[0];
    var songs = (await findSongsInDB(request.body.searchText))[0];
    console.log(request.body.searchText);

    for(var i = 0; i<songs.length; i++){
        const artistsId= (await findArtistsOfSongInBD(songs[i].song_id))[0];
        var artists_of_song = [];
        for (var j = 0; j<artistsId.length; j++){
            artists_of_song[j] = (await findArtistByIdInDB(artistsId[j].artist_id))[0][0];    
        }
        songs[i] = [songs[i], artists_of_song];
    }
        
    response.status(200).json({albums,artists,songs});
};

async function findAlbumsInDB(searchRow) {
    return await connection.promise().query(sqlQueries.FIND_ALBOMS_BY_NAME, [`%${searchRow}%`]);
};
async function findArtistsInDB(searchRow) {
    return await connection.promise().query(sqlQueries.FIND_ARTISTS_BY_NAME, [`%${searchRow}%`]);
};
async function findSongsInDB(searchRow) {
    return await connection.promise().query(sqlQueries.FIND_SONGS_BY_NAME, [`%${searchRow}%`]);
};

async function findArtistsOfSongInBD(searchRow){
    return await connection.promise().query(sqlQueries.FIND_ARTISTS_OF_SONG, [searchRow]);
}

async function findArtistByIdInDB(searchRow){
    return await connection.promise().query(sqlQueries.FIND_ARTIST_BY_ID, [searchRow])
}