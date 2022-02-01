const { Workout } = require('../models');

const workoutData = [
    {
        workout_type: 'Conditiong'
    },
    {
        workout_type: 'Legs'
    },
    {
        workout_type: 'Arms'
    },
];


const seedWorkout = () => Workout.bulkCreate(workoutData);

module.exports = seedWorkout;