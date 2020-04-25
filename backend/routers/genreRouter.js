const express = require("express");
const genreController = require('../controllers/genreController');
const playlistRouter = express.Router();

playlistRouter.get("/", genreController.getGenres);

module.exports = playlistRouter;