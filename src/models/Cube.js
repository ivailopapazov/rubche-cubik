const mongoose = require('mongoose');
const validator = require('validator');

const cubeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        validate: [/^[a-zA-Z0-9 ]+$/, 'Username should consist of english letters, digits and spaces'],
    },
    description: {
        type: String,
        required: true,
        maxlength: 100,
        minlength: 2,
    },
    // email: {
    //     validate: {
    //         validator: function(value) {
    //             return validator.isEmail(value)
    //         }
    //     }
    // },
    imageUrl: {
        type: String,
        required: true,
        validate: [/^https?:\/\//i, 'invalid image url']
        // validate: {
        //     validator: function(value) {
        //         return /^https?:\/\//i.test(value)
        //     },
        //     message: (props) => `Image Url ${props.value} is invalid!`
        // }
    },
    difficulty: {
        type: Number,
        required: true,
        min: 1,
        max: 5,
    },
    accessories: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Accessory',
        }
    ],
    creator: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    }
});

// cubeSchema.path('imageUrl').validate(function(value) {
//     return /^https?:\/\//i.test(value)
// });

// Not used only for demo
cubeSchema.statics.findByName = function(name) {
    return this.find({name});
};

const Cube = mongoose.model('Cube', cubeSchema);

module.exports = Cube;
