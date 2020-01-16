// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");

module.exports = function (sequelize, DataTypes) {
    return sequelize.define("NutritionPost", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        userID: {
            type: DataTypes.INTEGER,
            required: true
        },
        date: {
            type: DataTypes.DATEONLY,
            required: true
        },
        name: {
            type: DataTypes.STRING,
            required: true
        },
        calories: {
            type: DataTypes.INTEGER,
            required: true
        },
        multiplier: {
            type: DataTypes.INTEGER,
            required: true
        },
        totalCalories: {
            type: DataTypes.INTEGER,
            required: true
        }
    }, {
        timestamps: false
    }

    )
  
}


