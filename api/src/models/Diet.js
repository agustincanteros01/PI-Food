const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('diet', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        idDiet: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        }
    })
}