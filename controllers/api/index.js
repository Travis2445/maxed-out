const router = require('express').Router();

const userRoutes = require('./user-routes');
const cardioRoutes = require('./cardio-routes');
const workoutRoutes = require('./workout-routes');
const weightsRoutes = require('./weights-routes');

router.use('/users', userRoutes);
router.use('/cardio', cardioRoutes);
router.use('/workout', workoutRoutes);
router.use('/weights', weightsRoutes);

module.exports = router;