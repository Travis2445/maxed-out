const { Weights } = require('../models');

const weightData = [
    {
        weight_type: 'Benchpress',
        reps: '12',
        intensity: 'High',
        duration: '5',
        workout_id: 3
    },
    {
        weight_type: 'Dumbbell Curls',
        reps: '10',
        intensity: 'High',
        duration: '3',
        workout_id: 3
    },
    {
        weight_type: 'Squats',
        reps: '10',
        intensity: 'High',
        duration: '4',
        workout_id: 2
    },
];

const seedWieghts = () => Weights.bulkCreate(weightData);

module.exports = seedWieghts;