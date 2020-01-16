module.exports = function(sequelize, DataTypes) {
    const NutritionPost = sequelize.define("NutritionPost", {
        userID: DataTypes.INTEGER,
        date: DataTypes.DATEONLY,
        name: DataTypes.STRING,
        calories: DataTypes.INTEGER,
        multiplier: DataTypes.INTEGER,
        totalCalories: DataTypes.INTEGER
    }, {
        timestamps: false
    }


    )
    return NutritionPost;
}