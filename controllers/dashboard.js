const router = require('express').Router();
const sequelize = require('../config/connection');
const withAuth = require('../utils/auth');
const { User, Workout, Weights, Cardio } = require('../models');

router.get('/', withAuth, (req, res) => {
    console.log("Hello");
    Workout.findAll({
        where: {
            user_id: req.session.user_id
        },
        attributes: [
            'id',
            'workout_type',
            'created_at'
        ],
        include: [
            {
                model: Cardio,
                attributes: ['id', 'cardio_type', 'intensity', 'duration', 'distance', 'created_at'],
                include: {
                    model: User,
                    attributes: ['email']
                }
            },
            {
                model: User,
                attributes: ['email']
            }
        ]
    })
        .then(dbWorkoutData => {
            const workout = dbWorkoutData.map(workout => workout.get({ plain: true }));
            // res.render('dashboard', { workout, loggedIn: true });
            console.log(workout);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;