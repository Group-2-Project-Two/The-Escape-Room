const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Choices extends Model {}

Choices.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        text: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'choices',
      }
)

module.exports = Choices