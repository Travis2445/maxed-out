const router = require('express').Router();
const { Workout, Weights } = require('../../models');
const sequelize = require('../../config/connection');

// GET /api/weights
router.get('/', (req, res) => {
    Weights.findAll()
    .then(dbWeightsData => res.json(dbWeightsData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// GET /api/weights/:id
router.get('/:id', (req, res) => {
    Weights.findOne({
        where: {
            id: req.params.id
        }
    })
    .then(dbWeightsData => {
        if (!dbWeightsData) {
            res.status(404).json({ message: 'No weights workout found with this id' });
            return;
        }
        res.json(dbWeightsData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// POST /api/weights
router.post('/', (req, res) => {
    Weights.create({
        weight_type: req.body.weight_type,
        reps: req.body.reps,
        intensity: req.body.intensity,
        duration: req.body.duration
    })
    .then(dbWeightsData => res.json(dbWeightsData))
    .catch(err => {
        console.log(err);
        res.status(500).json(dbWeightsData);
    });
});

// PUT /api/weights/:id
router.put('/:id', (req, res) => {
    Weights.update(req.body, {
        where: {
            id: req.params.id
        }
    })
    .then(dbWeightsData => {
        if(!dbWeightsData) {
            res.status(404).json({ message: 'No weights workout found with this id' });
            return;
        }
        res.json(dbWeightsData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// DELETE /api/weights/:id
router.delete('/:id', (req, res) => {
    Weights.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbWeightsData => {
        if(!dbWeightsData) {
            res.status(404).json({ message: 'No weights workout found with this id. '});
            return;
        }
        res.json(dbWeightsData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;