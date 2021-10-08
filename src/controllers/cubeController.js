const router = require('express').Router();

const cubeService = require('../services/cubeService');
const cubeAccessoryController = require('./cubeAccessoryController');
const { isAuth } = require('../middlewares/authMiddleware');

const getCreateCubePage = (req, res) => {
    res.render('cube/create');
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

    res.render('cube/details', { ...cube });
};

const getEditCubePage = (req, res) => {
    res.render('cube/edit');
};

const getDeleteCubePage = (req, res) => {
    res.render('cube/delete');
};

router.get('/create', isAuth, getCreateCubePage);
router.post('/create', isAuth, createCube);
router.get('/:cubeId', cubeDetails);
router.get('/:cubeId/edit', isAuth, getEditCubePage);
router.get('/:cubeId/delete', isAuth, getDeleteCubePage);

router.use('/:cubeId/accessory', cubeAccessoryController);

module.exports = router;
