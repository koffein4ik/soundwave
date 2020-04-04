const express = require("express");
const searchController = require("../controllers/searchController");
const searchRouter = express.Router();

searchRouter.post("/", searchController.search);

module.exports = searchRouter;