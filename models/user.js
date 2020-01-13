module.exports = function (sequelize, DataTypes) {
    let user = sequelize.define('user', {
        user_name: DataTypes.STRING,
        googleID: DataTypes.STRING
    },
        {
            timestamps: false, // removes createdAt, updatedAt
            // defaultPrimaryKey: false // removes id
        })
    return user;
}