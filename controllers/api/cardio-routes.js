const router = require('express').Router();
const { Cardio } = require('../../models/Cardio');

router.get('/', (req, res) => {
    res.send('Cardio GET');
})

router.get('/:id', (req, res) => {
    res.send('Cardio GET single');
})

router.post('/', (req, res) => {
    res.send('Cardio POST');
})

router.put('/:id', (req, res) => {
    res.send('Cardio PUT');
})

router.delete('/:id', (req, res) => {
    res.send('Cardio DELETE');
})

module.exports = router;