const sequelize = require('../config/connection');
const { Product, Department } = require('../models');

const productData = [
    {
        product_name: 'Bananas',
        product_description: 'A bunch of ripe bananas',
        department_id: 1
    },
    {
        product_name: 'Avocados',
        product_description: 'A bag of 6 large Hass avocados',
        department_id: 1
    },
    {
        product_name: 'Potatoes',
        product_description: 'Bulk large Russet potatoes',
        department_id: 1
    },
    {
        product_name: 'Cabbage',
        product_description: 'A leafy head of green cabbage',
        department_id: 1
    },
    {
        product_name: 'Whole Milk',
        product_description: 'A gallon of whole milk',
        department_id: 2
    },
    {
        product_name: 'Butter',
        product_description: 'A stick of salted butter',
        department_id: 2
    },
    {
        product_name: 'Eggs',
        product_description: '1 dozen Grade-A large eggs',
        department_id: 2
    },
    {
        product_name: 'Cheddar Cheese',
        product_description: 'A block of sharp Cheddar cheese',
        department_id: 2
    },
    {
        product_name: 'Ground Beef',
        product_description: '1 lb. lean ground beef',
        department_id: 3
    },
    {
        product_name: 'Chicken Breasts',
        product_description: 'Boneless skinless chicken breasts',
        department_id: 3
    }

]