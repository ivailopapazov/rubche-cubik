const express = require('express');
const cubeService = require('../services/cubeService');

const router = express.Router();

const home = (req, res) => {
    let cubes = cubeService.getAll();

    res.render('index', { cubes });
};

const about = (req, res) => {
    res.render('about');
}

router.get('/', home);
router.get('/about', about);

module.exports = router;
