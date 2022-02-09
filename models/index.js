const Department = require('./Department');
const Product = require('./Product');

// Product belongsto Department
Product.belongsTo(Department);

// Department has many products
Department.hasMany(Product, {
    foreignKey: 'department_id'
});

module.exports = {
    Department,
    Product
};