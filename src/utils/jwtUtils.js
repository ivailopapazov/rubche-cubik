const jwt = require('jsonwebtoken');
// const util = require('util');

// exports.jwtSign = util.promisify(jwt.sign);
exports.jwtSign = function(payload, secret) {
    let promise = new Promise((resolve, reject) => {
        jwt.sign(payload, secret, function(err, token) {
            if (err) {
                reject(err);
            } else {
                resolve(token);
            }
        });
    });

    return promise;
};
