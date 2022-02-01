const { Cardio } = require('../models');

const cardioData = [
    {
        cardio_type: "Running",
        intensity: "Medium",
        duration: "60.00",
        distance: "5",
        workout_id: 1
    },
    {
        cardio_type: "Cycling",
        intensity: "High",
        duration: "60.00",
        distance: "10",
        workout_id: 1
    },
    {
        cardio_type: "Jump Rope",
        intensity: "High",
        duration: "15.00",
        workout_id: 1
    },
];

const seedCardio = () => Cardio.bulkCreate(cardioData);

module.exports = seedCardio;