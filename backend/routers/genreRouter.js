const express = require("express");
const genreController = require('../controllers/genreController');
const genreRouter = express.Router();

genreRouter.get("/", genreController.getGenres);

genreRouter.get("/getsongsbygenreid/:id", genreController.getSongByGenreId);

module.exports = genreRouter;