const sequelize = require('../config/connection');
const { Product, Department } = require('../models');

const productData = [
    {
        product_name: 'Bananas',
        product_description: 'A bunch of ripe bananas.',
        department_id: 1
    },
    {
        product_name: 'Avocados',
        product_description: 'A bag of .',
        department_id: 1
    }
]