const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { Workout, Weights, Cardio } = require('../../models');


// GET /api/workout
router.get('/', (req, res) => {
    Workout.findAll({
        include: [{
            model: Weights
        },
        {
            model: Cardio
        }],
    })
    .then(dbWorkoutData => res.json(dbWorkoutData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// GET /api/workout/:id
router.get('/:id', (req, res) => {
    Workout.findOne({
        where: {
            id: req.params.id
        },
        include: [{
            model: Weights
        },
        {
            model: Cardio
        }]
    })
    .then(dbWorkoutData => {
        if (!dbWorkoutData) {
            res.status(404).json({ message: 'No workout found with this id' });
            return;
        }
        res.json(dbWorkoutData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// POST /api/workout
router.post('/', withAuth, (req, res) => {
    Workout.create({
        user_id: req.session.user_id,
        workout_type: req.body.workout_type
    })
    .then(dbWorkoutData => res.json(dbWorkoutData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// PUT /api/workout/:id
router.put('/:id', withAuth, (req, res) => {
    Workout.update(req.body, {
        where: {
            id: req.params.id
        }
    })
    .then(dbWorkoutData => {
        if (!dbWorkoutData) {
            res.status(404).json({ message: 'No workout found with this id' });
            return;
        }
        res.json(dbWorkoutData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// DELETE /api/workout/:id
router.delete('/:id', withAuth, (req, res) => {
    Workout.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbWorkoutData => {
        if(!dbWorkoutData) {
            res.status(404).json({ message: 'No workout found with this id' });
            return;
        }
        res.json(dbWorkoutData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;