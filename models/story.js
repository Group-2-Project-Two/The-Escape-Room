const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Story extends Model {}

Story.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        type: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        keyword: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        story_text: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        choice_A: {
            type: DataTypes.TEXT,
        },
        choice_B: {
            type: DataTypes.TEXT,
        },
        next_A: {
            type: DataTypes.TEXT,
        },
        next_B: {
            type: DataTypes.TEXT,
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'story',
      }
)

module.exports = Story