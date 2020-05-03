exports.convertSong = function (song) {
    const songModel = {};
    songModel.name = song.song_name;
    songModel.picture_url = song.album_picture_url;
    songModel.id = song.song_id;
    songModel.url = song.url;
    songModel.artists = song.artists;
    songModel.album = {
        name: song.album_name,
        id: song.album_id,
        pictureURL: song.album_picture_url
    };
    return songModel;
};

exports.getSongsWithArrayOfArtists = function (results) {
    const songModels = [];
    let currentSongModel = results[0];
    if (!currentSongModel) return songModels;
    currentSongModel.artists = [];
    currentSongModel.artists.push({
        name: results[0].artist_name,
        id: results[0].artist_id
    });
    for (let i = 1; i < results.length; i++) {
        if (currentSongModel.song_id === results[i].song_id) {
            currentSongModel.artists.push({
                name: results[i].artist_name,
                id: results[i].artist_id
            });
        } else {
            songModels.push(currentSongModel);
            currentSongModel = results[i];
            currentSongModel.artists = [];
            currentSongModel.artists.push({
                name: currentSongModel.artist_name,
                id: currentSongModel.artist_id
            });
        }
    }
    songModels.push(currentSongModel);
    return songModels;
};