const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class StoryChoices extends Model {}

StoryChoices.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        story_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'story',
                key: 'id',
                unique: false
            }
        },
        choice_1_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'choices',
                key: 'id',
                unique: false
            }
        },
        choice_2_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'choices',
                key: 'id',
                unique: false
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'story-Choices',
      }
)

module.exports = StoryChoices