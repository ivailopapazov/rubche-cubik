const mongoose = require('mongoose');

function initDatabase(connectionString) {
    return mongoose.connect(connectionString);
} 

module.exports = initDatabase;