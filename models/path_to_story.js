const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class PathToStory extends Model {}

PathToStory.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        choice_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'choices',
                key: 'id',
                unique: false
            }
        },
        story_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'story',
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
        modelName: 'path-to-story',
      }
)

module.exports = PathToStory