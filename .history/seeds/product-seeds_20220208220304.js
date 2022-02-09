const sequelize = require('../config/connection');
const { Product, Department } = require('../models');

const productData = [
    {
        product_name: 'Bananas',
        product_description: 'Bunch of 6 ripe bananas',
        department_id: 1
    },
    {
        product_name: 'Avocados',
        product_description: 'Bag of 6 large avocados',
        department_id: 1
    },
    {
        product_name: 'Potatoes',
        product_description: 'Bulk large Russet potatoes',
        department_id: 1
    },
    {
        product_name: 'Cabbage',
        product_description: 'Head of green cabbage',
        department_id: 1
    },
    {
        product_name: 'Whole Milk',
        product_description: 'Gallon of whole milk',
        department_id: 2
    },
    {
        product_name: 'Butter',
        product_description: 'Stick of salted butter',
        department_id: 2
    },
    {
        product_name: 'Eggs',
        product_description: '1 dozen Grade-A large eggs',
        department_id: 2
    },
    {
        product_name: 'Cheddar Cheese',
        product_description: 'Block of sharp Cheddar cheese',
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
    },
    {
        product_name: 'Sockeye Salmon',
        product_description: 'Sockeye salmon fillets, fresh-caught',
        department_id: 3
    },
    {
        product_name: 'Pork Chops',
        product_description: 'Bone-in thick pork chops',
        department_id: 3
    },
    {
        product_name: 'Canned Tuna',
        product_description: 'Albacore tuna in water, 5 oz.',
        department_id: 4
    },
    {
        product_name: 'Potato Chips',
        product_description: 'Salted kettle-cooked potato chips',
        department_id: 4
    },
    {
        product_name: 'Corn Flakes',
        product_description: 'Frosted corn flake cereal',
        department_id: 4
    },
    {
        product_name: 'Peanut Butter',
        product_description: 'Jar of smooth peanut butter',
        department_id: 4
    },
    {
        product_name: 'Toilet Paper',
        product_description: '2-ply toilet paper rolls, pack of 6',
        department_id: 5
    },
    {
        product_name: 'Laundry Detergent',
        product_description: 'Gallon of lavender-scented detergent',
        department_id: 5
    },
    {
        product_name: 'Aluminum Foil',
        product_description: 'Roll of aluminum foil, 25 ft',
        department_id: 5
    },
    {
        product_name: 'Trash Bags',
        product_description: 'Heavy-duty gallon trash bags, 30 ct.',
        department_id: 5
    },

]