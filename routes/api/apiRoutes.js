// controls routing etc for api

const express = require('express');

const exersizes = require('../../data/exersizes');

const router = express.Router();

module.exports = function (app) {

    app.get("/api/exersizes", function (req, res) {
        res.json(exersizes);
    });

    app.get("/api/workouts", function (req, res) {
        // get workout data from mysql
    });

    app.get("/api/nutrition", function (req, res) {
        // get nutrition data from mysql
    });

    app.post("/api/workouts", function (req, res) {
        // post to workouts table in mysql
    });

    app.post("/api/nutrition", function (req, res) {
        // post to nutrition table in mysql
    });


}