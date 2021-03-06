const playlistService = require("../services/playlistService");
const recommendationService = require("../services/recommendationService");
const songConverter = require('../converters/songConverter');

exports.getPlaylistByUserId = async function(request, response) {
    const playlists = await playlistService.getPlaylistsByUserId(request.headers.user_id);
    for (let i = 0; i < playlists.length; i++) {
        const songs = await playlistService.getPlaylistSongsById(playlists[i].id);
        playlists[i].songs = songs.songs;
    }
    response.status(200).send(playlists);
};

exports.createPlaylist = async function(request, response) {
    const playlist = await playlistService.createPlaylist(request.body, request.headers.user_id, request.headers.host);
    response.status(201).send(playlist);
};

exports.addSongToPlaylist = async function(request, response) {
  await playlistService.addSongToPlaylist(request.body.playlistId, request.body.songId);
  response.status(200).send({"ok": "ok"});
};

exports.getPlaylistSongsById = async function(request, response) {
    const playlist = await playlistService.getPlaylistInfo(request.params.id);

    if ((playlist[0].user_id === request.headers.user_id) || (playlist[0].shared == 1)){
        const playlistSongs = await playlistService.getPlaylistSongsById(request.params.id);
        response.status(200).send(playlistSongs);
    } else {
        response.status(403).json({ message: "Playlist is closed"});
    }
};

exports.changePlaylistState = async function(request, response) {
    const changingResult = await playlistService.changePlaylistState(request.body.playlistId, request.body.state);
    response.status(200).send(changingResult);
};

exports.getRecommendations = async function(request, response) {
    const playlistSongs = await recommendationService.getRecommendationPlaylist(request.headers.user_id);
    const songsWithArtists = songConverter.getSongsWithArrayOfArtists(playlistSongs[0]);
    const songsModels = songsWithArtists.map(song => songConverter.convertSong(song));
    response.status(200).send(songsModels);
};