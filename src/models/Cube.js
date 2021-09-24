const uniqid = require('uniqid');

class Cube {
    static #cubes = [
        {
            id: 'asdfjnkldfvkjlzs',
            name: 'Mirror Cube',
            description: 'Strange Cube',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Mirror_Cube_solved.png/1200px-Mirror_Cube_solved.png',
            difficulty: '4'
        },
        {
            id: 'oamrndgsktymy2r2',
            name: 'Ice Cube',
            description: 'Some really old singer',
            imageUrl: 'https://api.time.com/wp-content/uploads/2015/08/ice-cube-straight-outta-compton1.jpg?quality=85&w=1200&h=628&crop=1',
            difficulty: '1'
        },
        {
            id: 'oamrnodgktynnv4x',
            name: 'Cute',
            description: 'Owl Cube',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6luFSET8vD7sbUcPusrFzblRSty_u46DafQ&usqp=CAU',
            difficulty: '2'
        }
    ];

    constructor(name, description, imageUrl, difficulty) {
        this.id = uniqid();
        this.name = name;
        this.description = description;
        this.imageUrl = imageUrl;
        this.difficulty = difficulty;
        // this.canonicalUrl = name.replace(/ /g, '-').toLowerCase()
    }

    static get cubes() {
        return Cube.#cubes.slice();
    }

    static add(cube) {
        Cube.#cubes.push(cube);
    }
}

module.exports = Cube;
