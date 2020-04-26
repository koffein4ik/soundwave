const express = require("express");
const imageRouter = express.Router();

imageRouter.use("/", express.static('images'));

module.exports = imageRouter;