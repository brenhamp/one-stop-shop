const Department = require('./Department');
const Product = require('./Product');
const Cart = require('./Cart');
const User = require('./User');

// Product belongsto Department
Product.belongsTo(Department);

// Department has many products
Department.hasMany(Product, {
    foreignKey: 'department_id'
});

// Cart belongs to User
Cart.belongsTo(User, {
    foreignKey: 'cart_id'
});

module.exports = {
    Department,
    Product,
    Cart,
    User
};