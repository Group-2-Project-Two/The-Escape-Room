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
        keyword: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        story_text: {
            type: DataTypes.TEXT,
            allowNull: false
        },                                                   //define the model's attributes, including the data types and properties for each column in the table
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
        },
        image_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'image',
                key: 'id'
            }
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