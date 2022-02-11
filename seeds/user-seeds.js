const { User } = require('../models');

const userData = [
    {
        username: 'bpozzi',
        email: 'bpozzi@example.com',
        password: 'test123'
    },
    {
        username: 'mbashford',
        email: 'mbashford@example.com',
        password: 'test123'
    },
    {
        username: 'fmills',
        email: 'fmills@example.com',
        password: 'test123'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;