const mongoose = require('mongoose');

const accessorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: [true, 'Image Url is required!'],
        validate: [/^https?:\/\//i, 'Image url is invalid']
    },
    description: {
        type: String,
        required: true,
        maxlength: 500,
    }
});

const Accessory = mongoose.model('Accessory', accessorySchema);

module.exports = Accessory;
