const express = require('express');
const cubeService = require('../services/cubeService');
const Cube = require('../models/Cube');

const router = express.Router();

const home = async (req, res) => {
    let cubes = await cubeService.getAll();

    res.render('index', { cubes });
};

const about = (req, res) => {
    res.render('about');
};

const search = async (req, res) => {
    let { search, from, to } = req.query;

    let cubes = await cubeService.search(search, from, to);

    res.render('index', { 
        title: 'SEARCH',
        search,
        from,
        to,
        cubes,
    });
};

router.get('/', home);
router.get('/about', about);
router.get('/search', search);

module.exports = router;
