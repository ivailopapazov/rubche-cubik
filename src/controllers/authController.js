const router = require('express').Router();
const authService = require('../services/authService');
const { TOKEN_COOKIE_NAME } = require('../constants');

router.get('/register', (req, res) => {
    res.render('auth/register');
});

router.post('/register', async (req, res) => {
    try {
        let { username, password, repeatPassword } = req.body;

        await authService.register(username, password, repeatPassword);

        res.redirect('/login');
    } catch (error) {
        res.status(400).send(error);
    }
});

router.get('/login', (req, res) => {
    res.render('auth/login');
});

router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    let user = await authService.login(username, password);

    if (!user) {
        return res.redirect('/404');
    }
    
    let token = await authService.createToken(user);
    // authService.createToken(user, function(err, token) {
    //     if(err) {

    //     } else {
    //         res.redirect('/');
    //     }
    // });

    res.cookie(TOKEN_COOKIE_NAME, token, {
        httpOnly: true,
    });

    res.redirect('/');
});

module.exports = router;
