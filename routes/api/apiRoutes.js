// controls routing etc for api

const express = require('express');

const exersizes = require('../../data/exersizes');

const db = require("../../models");

const moment = require("moment");

const profile = require("../auth/profile-routes");

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
        
        console.log(req.body.data);

        res.send(req.body);

        db.Workouts.createBulk({

            userID: '',
            date: moment(),
            name: req.body.name,
            calories: req.body.calories,
            multiplier: req.body.multiplier,
            totalCalories: req.body.calories * req.body.multiplier

        }).then(function(results) {
            console.log(results)
            res.end();
        })

    


    });

    app.post("/api/nutrition", function (req, res) {

        // post to nutrition table in mysql

        console.log(req.body);


        // res.body contains one object differentiated by keys

        // i need to break the object up based on the key, and submit each object individually to the database


        // db.Nutrition.createBulk({
        //     userID = profile.userID,
        //     date = moment(),
        //     name = 'Will',
        //     calories = 0,
        //     multiplier = multiplier,
        //     totalCalories: req.body.calories * req.body.multiplier
        // }).then(function(dbNutrition) {
        //     res.JSON(dbNutrition);
        // })


    });


}