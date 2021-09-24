const Cube = require('../models/Cube');

const cubeDb = [
    {
        name: 'Mirror Cube',
        description: 'Strange Cube',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Mirror_Cube_solved.png/1200px-Mirror_Cube_solved.png',
        difficulty: '4'
    }
];

const getAll = () => cubeDb.slice();

const create = (name, description, imageUrl, difficulty) => {
    let cube = new Cube(name, description, imageUrl, difficulty);

    cubeDb.push(cube);
};

const cubeService = {
    getAll,
    create,
};

module.exports = cubeService;
