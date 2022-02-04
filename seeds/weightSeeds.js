const { Weights } = require('../models');

const weightData = [
    {
        weight_type: 'Benchpress',
        reps: '12',
        intensity: 'High',
        duration: '5',
        date: "2022-01-04",
        workout_id: 3,
        user_id: 1
    },
    {
        weight_type: 'Dumbbell Curls',
        reps: '10',
        intensity: 'High',
        duration: '3',
        date: "2022-01-18",
        workout_id: 3,
        user_id: 1
    },
    {
        weight_type: 'Squats',
        reps: '10',
        intensity: 'High',
        duration: '4',
        date: "2022-01-28",
        workout_id: 2,
        user_id: 1
    },
];

const seedWieghts = () => Weights.bulkCreate(weightData);

module.exports = seedWieghts;