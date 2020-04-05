const express = require("express");
const songRouter = express.Router();

songRouter.use("/", express.static('songs'));

module.exports = songRouter;