// controls routing etc for api

const sequelize = require("../../config/connections");

const exersizes = require('../../data/exersizes');

const Workouts = sequelize.import("../../models/Workouts.js");

const Nutrition = sequelize.import("../../models/Nutrition.js");

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

        let reqBody = req.body.data;

        // res.send(req.body);

        for (let i = 0; i < req.body.data.length; i++) {

            Workouts.create({

                userID: profile.userID,
                date: moment(),
                name: reqBody[i].name,
                defaultTime: reqBody[i].defaultTime,
                calories: reqBody[i].calsPerRep,
                multiplier: 1, // reqBody[i].multiplier,
                totalCalories: reqBody[i].calsPerRep * 1 // reqBody[i].multiplier

            }).then(function (results) {
                console.log('results: ' + results)
                res.end();
            })

        }

        // bulkCreate()

    });

    app.post("/api/nutrition", function (req, res) {

        let reqBody = req.body.data;

        for (let i = 0; i < req.body.data.length; i++) {

            Nutrition.create({

                userID: profile.userID,
                date: moment(),
                name: reqBody[i].label,
                calories: reqBody[i].nutrients.ENERC_KCAL,
                multiplier: 1,
                totalCalories: reqBody[i].nutrients.ENERC_KCAL * req.body.multiplier

            }).then(function (results) {
                console.log('results: ' + results);
                res.end();
            })

        }

    });


}