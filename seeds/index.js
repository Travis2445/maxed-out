const sequelize = require('../config/connection');
const seedCardio = require('./cardioSeeds');
const seedUser = require('./userSeeds');
const seedWieghts = require('./weightSeeds');
const seedWorkout = require('./workoutSeeds');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();
  await seedWorkout();
  await seedCardio();
  await seedWieghts();

  process.exit(0);
};

seedAll();