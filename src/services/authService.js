// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcrypt');
const User = require('../models/User');
const { jwtSign } = require('../utils/jwtUtils');
const { SECRET } = require('../constants');

exports.register = function (username, password, repeatPassword) {
    // validate password
    // return bcrypt.hash(password, 10)
    //     .then(hash => User.create({ username, password: hash }))

    return User.create({ username, password, repeatPassword });
};

exports.login = function (username, password) {
    return User.findByUsername(username)
        .then(user => Promise.all([user.validatePassword(password), user]))
        .then(([isValid, user]) => {
            if (isValid) {
                return user;
            } else {
                throw { message: 'Cannot find username or password'}
            }
        })
        .catch(() => null);
}

// exports.createToken = function(user, onTokenCreate) {
//     let payload = {
//         _id: user._id,
//         username: user.username,
//     }
    
//     jwt.sign(payload, SECRET, function(err, token) {
//         if (err) {
//            return onTokenCreate(err);
//         }

//         onTokenCreate(null, token);
//     });
// };

exports.createToken = function(user) {
    let payload = {
        _id: user._id,
        username: user.username,
    }

    return jwtSign(payload, SECRET);

    // return new Promise((resolve, reject) => {
    //     jwt.sign(payload, SECRET, function(err, token) {
    //         if (err) {
    //             reject(err);
    //         } else {
    //             resolve(token);
    //         }
    //     })
    // });
};

