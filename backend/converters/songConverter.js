exports.convertSong = function (song) {
    let songModel = {};
    songModel.name = song.songs_name;
    songModel.picture_url = song.album_picture_url;
    songModel.song_id = song.song_id;
    songModel.url = song.url;
    const artistModel = {
        name: song.artist_name,
        id: song.artist_id
    };
    songModel.artist = artistModel;
    const albumModel = {
        name: song.album_name,
        id: song.album_id,
        pictureURL: song.album_picture_url
    };
    songModel.album = albumModel;
    return songModel;
};