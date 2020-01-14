// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Requiring mysql package
const mysql = require("mysql2");

const Sequelize = require("sequelize");

const NutritionModel = require("../models/Nutrition");

const WorkoutsModel = require("../models/Workouts");

// Setting up our connection information

// const source = {
//   localhost: {
//     host: "localhost",
//     port: 1542,
//     user: "root",
//     password: "password",
//     database: "blazeDB"
//   }
// };

const sequelize = new Sequelize('blazeDB', 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
      max: 10,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  });

const Nutrition = NutritionModel(sequelize, Sequelize);

const Workouts = WorkoutsModel(sequelize, Sequelize);

// Creating our connection
const connection = mysql.createConnection(source.localhost);


// Connecting to the database.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Exporting our connection
module.exports = connection;
