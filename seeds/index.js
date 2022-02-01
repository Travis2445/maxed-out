const sequelize = require('../config/connection');
const seedWorkout = require('./workoutSeeds');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedWorkout();

  process.exit(0);
};

seedAll();