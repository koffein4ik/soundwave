const jwt = require("jsonwebtoken");
const atob = require('atob');
const PRIVATE_KEY = require("../config/RSA_KEY").privateKey;

exports.authenticate = function(req, res) {
    try {
        return jwt.verify(req.headers.authorization, PRIVATE_KEY);
    } catch (e) {
        console.log(e);
        res.sendStatus(401);
        return false;
    }
};

exports.getUserId = function(req) {

};