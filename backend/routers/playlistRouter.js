const express = require("express");
const playlistController = require("../controllers/playlistController");
const playlistRouter = express.Router();

playlistRouter.get("/recommendations", playlistController.getRecommendations);
playlistRouter.get("/getplaylists", playlistController.getPlaylistByUserId);
playlistRouter.post("/createplaylist", playlistController.createPlaylist);
playlistRouter.post("/addsongtoplaylist", playlistController.addSongToPlaylist);
playlistRouter.get("/:id", playlistController.getPlaylistSongsById);
playlistRouter.post("/changeplayliststate", playlistController.changePlaylistState);

module.exports = playlistRouter;