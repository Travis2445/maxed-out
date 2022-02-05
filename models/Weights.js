const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Weights extends Model {}

Weights.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        weight_type: {
            type: DataTypes.STRING,
            allowNull: false
        },
        reps: {
            type: DataTypes.INTEGER,
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
                isDecimal: true
            }
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
        modelName: 'weights',
    }
);


module.exports = Weights;