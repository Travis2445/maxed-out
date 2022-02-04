const router = require('express').Router();
const sequelize = require('../config/connection');
const withAuth = require('../utils/auth');
const { User, Workout, Weights, Cardio } = require('../models');


router.get('/', withAuth, (req, res) => {
    console.log("Hello");
    console.log(req.session.user_id);
    Workout.findAll({
        where: {
            user_id: req.session.user_id
        },
        attributes: [
            'id',
            'workout_type'
        ],
        include: [
            {
                model: Cardio,
                attributes: ['id', 'cardio_type', 'intensity', 'duration', 'distance', 'date', 'user_id']
            },
            {
                model: Weights,
                attributes: ['id', 'weight_type', 'reps', 'intensity', 'duration', 'date', 'user_id']
            },
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
        .then(dbWorkoutData => {
            const workout = dbWorkoutData.map(workout => workout.get({ plain: true }));
            res.render('dashboard', { workout, loggedIn: true });
            console.log(workout);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/', withAuth, (req, res) => {
    console.log("Hello");
    console.log(req.session.user_id);
    Cardio.findAll({
        where: {
            user_id: req.session.user_id
        },
        attributes: [
            'id',
            'cardio_type',
            'duration',
            'distance',
        ]
    })
        .then(dbWorkoutData => {
            const workout = dbWorkoutData.map(workout => workout.get({ plain: true }));
            res.render('dashboard', { workout, loggedIn: true });
            console.log(workout);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});
module.exports = router;