const sequelize = require('../config/config');
const SeedPost = require('./postData');
const SeedUser = require('./userData');


const seedAll = async () => {
    await sequelize.sync({ force: true });

    await SeedUser();

    await SeedPost();
    process.exit(0);
};

seedAll();