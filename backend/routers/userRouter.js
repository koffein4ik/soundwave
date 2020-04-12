const express = require("express");
const userRouter = express.Router();
const authService = require('../services/authService');

const playlistRouter = require("./playlistRouter");

userRouter.use(function(req, res, next) {
    if (authService.authenticate(req, res)) {
        authService.getUserId(req, res);
        console.log(req.headers.user_id);
        next();
    }
});

userRouter.get("/hey",  function (req, res) {
    console.log("GET");
    res.sendStatus(200);
});

userRouter.use("/playlist", playlistRouter);

module.exports = userRouter;