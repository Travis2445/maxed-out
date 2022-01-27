const router = require('express').Router();

const userRoutes = require('./user-routes');
const cardioRoutes = require('./cardio-routes');

router.use('/users', userRoutes);
router.use('/cardio', cardioRoutes);

module.exports = router;