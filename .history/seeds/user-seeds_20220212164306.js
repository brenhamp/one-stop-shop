const { User } = require('../models');

const userData = [
    {
        email: 'bpozzi@example.com',
        password: 'test123'
    },
    {
        email: 'mbashford@example.com',
        password: 'test123'
    },
    {
        email: 'fmills@example.com',
        password: 'test123'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;