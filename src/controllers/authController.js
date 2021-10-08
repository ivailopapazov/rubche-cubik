const router = require('express').Router();

router.get('/login', (req, res) => {
    res.render('auth/login');
});

module.exports = router;