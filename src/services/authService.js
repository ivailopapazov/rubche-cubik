const bcrypt = require('bcrypt');
const User = require('../models/User');

exports.register = function (username, password, repeatPassword) {
    // validate password
    // return bcrypt.hash(password, 10)
    //     .then(hash => User.create({ username, password: hash }))

    return User.create({ username, password });
};

exports.login = function (username, password) {
    return User.findByUsername(username)
        .then(user => Promise.all([bcrypt.compare(password, user.password), user]))
        .then(([isValid, user]) => {
            if (isValid) {
                return user;
            } else {
                throw { message: 'Cannot find username or password'}
            }
        })
}
