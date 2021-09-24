const Cube = require('../models/Cube');

const getAll = () => Cube.cubes

const getOne = (id) => Cube.cubes.find(x => x.id == id);

const create = (name, description, imageUrl, difficulty) => {
    let cube = new Cube(name, description, imageUrl, difficulty);

    Cube.add(cube);
};

const cubeService = {
    getAll,
    create,
    getOne,
};

module.exports = cubeService;
