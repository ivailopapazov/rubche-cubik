const express = require('express');

const router = express.Router();

const createCube = (req, res) => {
    res.render('create');
};

router.get('/create', createCube);

module.exports = router;
