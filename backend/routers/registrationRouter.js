const express = require("express");
const registrationController = require("../controllers/registrationController");
const registrationRouter = express.Router();

registrationRouter.post("/", registrationController.register);

module.exports = registrationRouter;