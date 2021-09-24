const Cube = require('../models/Cube');

const getAll = () => Cube.cubes

const getOne = (id) => Cube.cubes.find(x => x.id == id);

const create = (name, description, imageUrl, difficulty) => {
    let cube = new Cube(name, description, imageUrl, difficulty);

    Cube.add(cube);
};

const search = (text, from, to) => {
    let result = Cube.cubes;

    if (text) {
        result = result.filter(x => x.name.toLowerCase().includes(text.toLowerCase()))
    }

    if (from) {
        result = result.filter(x => x.difficulty >= from);
    }

    if (to) {
        result = result.filter(x => x.difficulty <= to);
    }

    return result;
};

const cubeService = {
    getAll,
    create,
    getOne,
    search,
};

module.exports = cubeService;
