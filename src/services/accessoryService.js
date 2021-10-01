const Accessory = require('../models/Accessory');

async function create(name, description, imageUrl) {
    return Accessory.create({name, description, imageUrl});
}

async function getAll() {
    return Accessory.find({}).lean();
}

const accessoryService = {
    getAll,
    create,
};

module.exports = accessoryService;
