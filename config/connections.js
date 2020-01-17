// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Requiring mysql package

// const mysql = require("mysql2");

const Sequelize = require("sequelize");

// Setting up our connection information

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

// Exporting our connection
module.exports = sequelize;
