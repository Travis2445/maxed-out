const { Model, DataTypes} = require('sequelize');

const sequelize = require('../config/connection');

class Cardio extends Model {}

Cardio.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        cardio_type: {
            type: DataTypes.STRING,
            allowNull: false
        },
        intensity: {
            type: DataTypes.STRING,
            allowNull: false
        },
        duration: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            validate: {
                isNumeric: true
            }
        },
        distance: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        date: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        workout_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'workout',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'cardio',
    }
);


module.exports = Cardio;