exports.convertSong = function (song) {
    const songModel = {};
    songModel.name = song.songs_name;
    songModel.picture_url = song.album_picture_url;
    songModel.song_id = song.song_id;
    songModel.url = song.url;
    songModel.artist = {
        name: song.artist_name,
        id: song.artist_id
    };
    songModel.album = {
        name: song.album_name,
        id: song.album_id,
        pictureURL: song.album_picture_url
    };
    return songModel;
};