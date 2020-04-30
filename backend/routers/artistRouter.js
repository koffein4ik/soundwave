const express = require("express");
const artistController = require("../controllers/artistController");
const artistRouter = express.Router();

artistRouter.get("/:id", artistController.getArtistInfo);

module.exports = artistRouter;