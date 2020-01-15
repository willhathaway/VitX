// controls routing etc for api

const express = require('express');

const exersizes = require('../../data/exersizes');

const db = require("../../models");

const moment = require("moment");

// const router = express.Router();

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
        
        console.log(req.body);
        res.send(req.body);


    });

    app.post("/api/nutrition", function (req, res) {

        // post to nutrition table in mysql
        console.log(req[0].food);


        for (let i = 0; i < req.length; i++) {
            res.send(req[i].food);
        }

        

        // res.body contains one object differentiated by keys

        // i need to break the object up based on the key, and submit each object individually to the database


        // db.Nutrition.create({
        //     user = 'Will',
        //     date = moment(),
        //     id = 0,
        //     name = req.body,
        //     calories = calories,
        //     multiplier = multiplier
        // }).then(function(dbNutrition) {
        //     res.JSON(dbNutrition);
        // })


    });


}