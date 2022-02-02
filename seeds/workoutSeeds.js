const { Workout } = require('../models');

const workoutData = [
    {
        workout_type: 'Conditiong',
        user_id: 1
    },
    {
        workout_type: 'Legs',
        user_id: 1
    },
    {
        workout_type: 'Arms',
        user_id: 1
    },
];


const seedWorkout = () => Workout.bulkCreate(workoutData);

module.exports = seedWorkout;