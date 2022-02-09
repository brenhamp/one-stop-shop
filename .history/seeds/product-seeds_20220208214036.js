const sequelize = require('../config/connection');
const { Product, Department } = require('../models');

const productData = [
    {
        product_name: 'Bananas',
        product_description: 'A bunch of ripe bananas.'
    }
]