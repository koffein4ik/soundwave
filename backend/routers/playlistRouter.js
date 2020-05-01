const express = require("express");
const playlistController = require("../controllers/playlistController");
const playlistRouter = express.Router();

playlistRouter.get("/getplaylists", playlistController.getPlaylistByUserId);
playlistRouter.post("/createplaylist", playlistController.createPlaylist);
playlistRouter.get("/:id", playlistController.getPlaylistSongsById);

module.exports = playlistRouter;