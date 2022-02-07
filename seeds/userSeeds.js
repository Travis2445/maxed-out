const sequelize = require('../config/connection');
const { User } = require('../models');

const userData = [
    {
        username: 'jim',
        email: 'jim@gmail.com',
        password: 'testtest'
    },
    {
        username: 'john',
        email: 'john@gmail.com',
        password: 'testtest'
    },
    {
        username: 'david',
        email: 'david@gmail.com',
        password: 'testtest'
    }
];

const seedUser = () => User.bulkCreate(userData, {individualHooks: true});

module.exports = seedUser;