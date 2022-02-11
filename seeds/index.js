const seedDepartments = require ('./department-seeds');
const seedProducts = require ('./product-seeds');
const seedUsers = require ('./user-seeds');
const seedCart = require ('./cart-seeds');

const sequelize = require ('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('------------');
    await seedDepartments();
    console.log('---DEPARTMENTS SEEDED---');
    console.log('------------');
    await seedProducts();
    console.log('---PRODUCTS SEEDED---');
    console.log('------------');
    await seedUsers();
    console.log('---USERS SEEDED---');
    console.log('------------');
    await seedCart();
    console.log('---CARTS SEEDED---');

    process.exit(0);
};

seedAll();