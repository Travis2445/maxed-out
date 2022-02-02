const User = require('./User');
const Workout = require('./Workout');
const Weights = require('./Weights');
const Cardio = require('./Cardio');

User.hasOne(Workout, {
    foreignKey: 'user_id'
});

Workout.belongsTo(User, {
    foreignKey:'user_id'
});

Weights.belongsTo(Workout, {
    foreignKey: 'workout_id'
});

Workout.hasMany(Weights, {
    foreignKey: 'workout_id'
});


Cardio.belongsTo(Workout, {
    foreignKey: 'workout_id'
});

Workout.hasMany(Cardio, {
    foreignKey: 'workout_id'
});

module.exports = { Workout, Cardio, Weights, User };