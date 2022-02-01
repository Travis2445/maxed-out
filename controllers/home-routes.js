const router = require('express').Router();
const { Cardio, User, Weights, Workout } = require('../models');

router.get('/', (req, res) => {
    res.render('homepage');
  });

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  
  res.render('login');
});

router.get('/signup', (req, res) => {
  res.render('signup');
});

router.get('/dashboard', (req, res) => {
  res.render('dashboard');
});

module.exports = router;
