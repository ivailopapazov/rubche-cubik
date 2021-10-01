const mongoose = require('mongoose');

const cubeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
        maxlength: 100,
    },
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
    ]
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
