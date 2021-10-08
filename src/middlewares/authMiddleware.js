const { TOKEN_COOKIE_NAME, SECRET } = require('../constants');
const jwt = require('jsonwebtoken');

exports.auth = function(req, res, next) {
    let token = req.cookies[TOKEN_COOKIE_NAME];

    if (!token) {
        return next();
    }

    // TODO: extract jwt.verify to jwt utils and make it promise function
    jwt.verify(token, SECRET, function(err, decodedToken) {
        if (err) {
            return res.status(401).redirect('/login');
        }

        req.user = decodedToken;

        next();
    });
};

exports.isAuth = function(req, res, next) {
    if (!req.user) {
        return res.status(401).redirect('/login');
    }

    next();
}