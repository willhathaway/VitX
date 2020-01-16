// controls routing etc for api

const sequelize = require("../../config/connections");

const exercises = require('../../data/exercises');

// const db = require("../../models");

const Workouts = sequelize.import("../../models/Workouts.js");

const Nutrition = sequelize.import("../../models/Nutrition.js");

const moment = require("moment");

const profile = require("../auth/profile-routes");

console.log(profile);

// const router = express.Router();

module.exports = function (app) {

    app.get("/api/exercises", function (req, res) {
        res.json(exercises);
    });

    app.get("/api/workouts", function (req, res) {
        // get workout data from mysql

        Workouts.findAll({})
            .then(function (workoutData) {
                res.json(workoutData);
            });


    });

    app.get("/api/nutrition", function (req, res) {
        // get nutrition data from mysql

        Nutrition.findAll({})
            .then(function (nutritionData) {
                res.json(nutritionData);
            });

    });

    // -=-=-=-=-=-=-=-=-=-=-=
    // CSS importing for server 
    // -=-=-=-=-=-=-=-=-=-=-=

    app.get("/css/index.css", function (req, res) {
        res.sendFile(path.join(__dirname, '../../views/css/index.css'))
    })

    app.get("/css/index.css", function (req, res) {
        res.sendFile(path.join(__dirname, '../../views/css/app.css'))
    })



    // -=-=-=-=-=-=-=-=-=-=-=
    // js importing for server 
    // -=-=-=-=-=-=-=-=-=-=-=

    app.get("/css/index.css", function (req, res) {
        res.sendFile(path.join(__dirname, '../../views/Animation/index_gsap.js'))
    })

    app.get("/css/index.css", function (req, res) {
        res.sendFile(path.join(__dirname, '../../views/Animation/home_gsap.js'))
    })

    app.get("/css/index.css", function (req, res) {
        res.sendFile(path.join(__dirname, '../../views/design/app_design.js'))
    })







    app.get("/css/index.css", function (req, res) {
        res.sendFile(path.join(__dirname, '../../views/libraries/d3.js'))
    })




    app.post("/api/workouts", function (req, res) {

        // post to workouts table in mysql

        let reqBody = req.body.data;

        console.log(reqBody);

        for (let i = 0; i < req.body.data.length; i++) {

            Workouts.create({

                userID: 1,
                date: moment(),
                name: reqBody[i].name,
                defaultTime: reqBody[i].defaultTime,
                calories: reqBody[i].calsPerRep,
                multiplier: reqBody[i].multiplier,
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

        console.log(reqBody);

        for (let i = 0; i < reqBody.length; i++) {

            Nutrition.create({

                userID: 1,
                date: moment(),
                name: reqBody[i].label,
                calories: reqBody[i].nutrients.ENERC_KCAL,
                multiplier: reqBody[i].multiplier,
                totalCalories: reqBody[i].nutrients.ENERC_KCAL * reqBody[i].multiplier

            }).then(function (results) {
                console.log('results: ' + results);
                res.end();
            })

        }

    });


}