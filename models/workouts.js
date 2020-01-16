

module.exports = function(sequelize, DataTypes) {
    const WorkoutPost = sequelize.define("WorkoutPost", {
        userID: DataTypes.INTEGER,
        date: DataTypes.DATEONLY,
        name: DataTypes.STRING,
        calories: DataTypes.INTEGER,
        multiplier: DataTypes.INTEGER,
        totalCalories: DataTypes.INTEGER
    }, {
        timestamps: false
    })

    return WorkoutPost;
}