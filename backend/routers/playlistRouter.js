const express = require("express");
const playlistController = require("../controllers/playlistController");
const playlistRouter = express.Router();

playlistRouter.get("/getplaylists", playlistController.getPlaylistByUserId);
playlistRouter.post("/createplaylist", playlistController.createPlaylist);

module.exports = playlistRouter;