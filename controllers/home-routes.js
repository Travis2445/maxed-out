const router = require('express').Router();
const sequelize = require('../config/connection');
const { Cardio, User, Weights, Workout } = require('../models');

router.get('/', (req, res) => {
    res.render('login');
  });

module.exports = router;
