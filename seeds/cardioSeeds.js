const { Cardio } = require('../models');

const cardioData = [
    {
        cardio_type: "Running",
        intensity: "Medium",
        duration: "60.00",
        distance: "5",
        date: "2022-01-20",
        workout_id: 1,
        user_id: 1
    },
    {
        cardio_type: "Cycling",
        intensity: "High",
        duration: "60.00",
        distance: "10",
        date: "2022-01-23",
        workout_id: 1,
        user_id: 1
    },
    {
        cardio_type: "Swimming",
        intensity: "Medium",
        duration: "20.00",
        distance: "2",
        date: "2022-01-27",
        workout_id: 1,
        user_id: 1
    },
];

const seedCardio = () => Cardio.bulkCreate(cardioData);

module.exports = seedCardio;