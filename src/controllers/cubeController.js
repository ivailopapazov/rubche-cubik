const router = require('express').Router();

const cubeService = require('../services/cubeService');

const getCreateCubePage = (req, res) => {
    res.render('create');
};

const createCube = async (req, res) => {
    let { name, description, imageUrl, difficulty } = req.body;

    try {
        await cubeService.create(name, description, imageUrl, difficulty);

        res.redirect('/');
    } catch (error) {
        res.status(400).send(error.message).end();
    }
};

const cubeDetails = async (req, res) => {
    let cube = await cubeService.getOne(req.params.cubeId);

    res.render('details', { ...cube });
};

router.get('/create', getCreateCubePage);
router.post('/create', createCube);
router.get('/:cubeId', cubeDetails);

module.exports = router;
