const router = require('express').Router();

const { Workout, Weights, Cardio } = require('../../models');

router.get('/', (req, res) => {
        // find all wokrouts
        Workout.findAll()
        .then(workData => res.json(workData))
        .catch(err => {
        console.log(err);
        res.status(500).json(err);
        });
    });

    router.get('/:id', (req, res) => {
    // find one workout by its `id` value
    Workout.findOne(
        {
            where: {
                id: req.params.id
            },
        }
    ) .then(workData => res.json(workData))
        .catch(err => {
        console.log(err);
        res.status(500).json(err);
        });
    });

router.post('/', (req, res) => {
    // create a new workout
    Workout.create(
        {
        workout_type: req.body.workout_type
        }
    ) .then(workData => res.json(workData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
    });
    
    router.put('/:id', (req, res) => {
    // update a workout by its `id` value
    Workout.update(req.body, {
        where: {
        id: req.params.id
        }
    })
    .then(workData => {
        if (!workData) {
        res.status(404).json({ message: 'No workout found with this id' });
        return;
        }
        res.json(workData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
    // delete a workout by its `id` value
    Workout.destroy(
        {
        where: {
            id: req.params.id
        }
        }
    ) .then(workData => {
        if(!workData) {
        res.status(404).json({ message: 'No workout found with this id' });
        return;
        }
        res.json(workData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

    module.exports = router;