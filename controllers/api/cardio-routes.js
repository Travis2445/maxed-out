const router = require('express').Router();
const { Workout, Cardio } = require('../../models');
const sequelize = require('../../config/connection');

// GET /api/cardio
router.get('/', (req, res) => {
    Cardio.findAll()
    .then(dbCardioData => res.json(dbCardioData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// GET /api/cardio/:id
router.get('/:id', (req, res) => {
    Cardio.findOne({
        where: {
            id: req.params.id
        }
    })
    .then(dbCardioData => {
        if (!dbCardioData) {
            res.status(404).json({ message: 'No cardio workout found with this id' });
            return;
        }
        res.json(dbCardioData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// POST /api/cardio
router.post('/', (req, res) => {
    Cardio.create({
        cardio_type: req.body.cardio_type,
        intensity: req.body.intensity,
        duration: req.body.duration,
        distance: req.body.distance
    })
    .then(dbCardioData => res.json(dbCardioData))
    .catch(err => {
        console.log(err);
        res.status(500).json(dbCardioData);
    });
});

// PUT /api/cardio/:id
router.put('/:id', (req, res) => {
    Cardio.update(req.body, {
        where: {
            id: req.params.id
        }
    })
    .then(dbCardioData => {
        if(!dbCardioData) {
            res.status(404).json({ message: 'No cardio workout found with this id' });
            return;
        }
        res.json(dbCardioData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// DELETE /api/cardio/:id
router.delete('/:id', (req, res) => {
    Cardio.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbCardioData => {
        if(!dbCardioData) {
            res.status(404).json({ message: 'Mo cardio workout found with this id. '});
            return;
        }
        res.json(dbCardioData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;