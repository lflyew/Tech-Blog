const { user } = require('../models');

const UserData = [
    {
        'username': "Hulk",
        "password": "password"
    },
    {
        'username': "Thor",
        "password": "password"
    },
    {
        'username': "Spiderman",
        "password": "password"
    },
];

const SeedUser = () => user.bulkCreate(UserData, {
    individualHooks: true,
    returning: true,
});
module.exports = SeedUser;