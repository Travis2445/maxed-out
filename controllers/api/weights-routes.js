const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { Workout, Weights } = require('../../models');


// GET /api/weights
router.get('/', (req, res) => {
    Weights.findAll(
        {
            include: {
                model: Workout
            }
        }
    )
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
router.post('/', withAuth, (req, res) => {
    Weights.create(
    req.body
    ) .then(dbWeightsData => res.json(dbWeightsData)) 
    .catch(err => {
        console.log(err);
        res.status(400).json(err);
    });
});

// PUT /api/weights/:id
router.put('/:id', withAuth, (req, res) => {
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
router.delete('/:id', withAuth, (req, res) => {
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