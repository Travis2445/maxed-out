const Workout = require('./Workout');
const Weights = require('./Weights');
const Cardio = require('./Cardio');

Weights.belongsTo(Workout, {
    foreignKey: 'workout_id'
});

Cardio.belongsTo(Workout, {
    foreignKey: 'workout_id'
});


module.exports = { Workout, Cardio, Weights };