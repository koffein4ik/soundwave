const express = require("express");
const albumController = require("../controllers/albumController");
const albumRouter = express.Router();

albumRouter.get("/:id", albumController.getAlbumSongsById);

module.exports = albumRouter;