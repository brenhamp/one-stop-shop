const Department = require('./Department');
const Product = require('./Product');
const Cart = require('./Cart');

// Product belongsto Department
Product.belongsTo(Department);

// Department has many products
Department.hasMany(Product, {
    foreignKey: 'department_id'
});

module.exports = {
    Department,
    Product,
    Cart
};