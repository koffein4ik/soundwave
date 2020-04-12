const express = require("express");
const playlistController = require("../controllers/playlistController");
const playlistRouter = express.Router();

playlistRouter.get("/getplaylists", playlistController.getPlaylistByUserId);

module.exports = playlistRouter;