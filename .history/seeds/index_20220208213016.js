const seedDepartments = require ('./department-seeds');
const seedProducts = require ('./product-seeds');

const sequelize = require ('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('------------');
    
}