const router = require('express').Router();

const userRoutes = require('./user-routes');
const cardioRoutes = require('./cardio-routes');
const workoutRoutes = require('./workout-routes');

router.use('/users', userRoutes);
router.use('/cardio', cardioRoutes);
router.use('/workout', workoutRoutes);
router.use('/users', userRoutes);

module.exports = router;