const { Product } = require('../models');

const productData = [
    {
        product_name: 'Bananas',
        product_id: 1,
        product_description: 'Bunch of 6 ripe bananas',
        price: 3.99,
        img: '../public/banana-bunch.jpg',
        department_id: 1
    },
    {
        product_name: 'Avocados',
        product_id: 2,
        product_description: 'Bag of 6 large avocados',
        price: 4.99,
        img: '../public/avocado.jpg',
        department_id: 1
    },
    {
        product_name: 'Potatoes',
        product_id: 3,
        product_description: 'Bulk large Russet potatoes',
        price: 2.59,
        img: '../public/russet-potatoes.jpg',
        department_id: 1
    },
    {
        product_name: 'Cabbage',
        product_id: 4,
        product_description: 'Head of green cabbage',
        img: '../public/cabbage.jpg',
        price: 1.99,
        department_id: 1
    },
    {
        product_name: 'Whole Milk',
        product_id: 5,
        product_description: 'Gallon of whole milk',
        img: '../public/milk.jpg',
        price: 1.99,
        department_id: 2
    },
    {
        product_name: 'Butter',
        product_id: 6,
        product_description: 'Stick of salted butter',
        img: '../public/butter.jpg',
        price: 1.59,
        department_id: 2
    },
    {
        product_name: 'Eggs',
        product_id: 7,
        product_description: '1 dozen Grade-A large eggs',
        img: '../public/egg-carton.jpeg',
        price: 2.59,
        department_id: 2
    },
    {
        product_name: 'Cheddar Cheese',
        product_id: 8,
        product_description: 'Block of sharp Cheddar cheese',
        img: '../public/cheddar-cheese.jpg',
        price: 3.59,
        department_id: 2
    },
    {
        product_name: 'Ground Beef',
        product_id: 9,
        product_description: '1 lb. lean ground beef',
        img: '../public/ground-beef.jpg',
        price: 7.99,
        department_id: 3
    },
    {
        product_name: 'Chicken Breasts',
        product_id: 10,
        product_description: 'Boneless skinless chicken breasts',
        img: '../public/chicken.jpg',
        price: 6.99,
        department_id: 3
    },
    {
        product_name: 'Sockeye Salmon',
        product_id: 11,
        product_description: 'Sockeye salmon fillets, fresh-caught',
        img: '../public/sockeye-salmon.jpg',
        price: 12.99,
        department_id: 3
    },
    {
        product_name: 'Pork Chops',
        product_id: 12,
        product_description: 'Bone-in thick pork chops',
        img: '../public/pork-chop.jpg',
        price: 5.59,
        department_id: 3
    },
    {
        product_name: 'Canned Tuna',
        product_id: 13,
        product_description: 'Albacore tuna in water, 5 oz.',
        img: '../public/tuna.jpg',
        price: 0.99,
        department_id: 4
    },
    {
        product_name: 'Potato Chips',
        product_id: 14,
        product_description: 'Salted kettle-cooked potato chips',
        img: '../public/kettle-chips.jpg',
        price: 1.59,
        department_id: 4
    },
    {
        product_name: 'Corn Flakes',
        product_id: 15,
        product_description: 'Frosted corn flake cereal',
        img: '../public/frosted-flakes.jpg',
        price: 3.59,
        department_id: 4
    },
    {
        product_name: 'Peanut Butter',
        product_id: 16,
        product_description: 'Jar of smooth peanut butter',
        img: '../public/peanut-butter.jpg',
        price: 3.59,
        department_id: 4
    },
    {
        product_name: 'Toilet Paper',
        product_id: 17,
        product_description: '2-ply toilet paper rolls, pack of 6',
        img: '../public/toilet-paper.jpg',
        price: 3.99,
        department_id: 5
    },
    {
        product_name: 'Laundry Detergent',
        product_id: 18,
        product_description: 'Gallon of lavender-scented detergent',
        img: '../public/laundry-detergent.jpg',
        price: 6.99,
        department_id: 5
    },
    {
        product_name: 'Aluminum Foil',
        product_id: 19,
        product_description: 'Roll of aluminum foil, 25 ft',
        img: '../public/foil.jpg',
        price: 3.59,
        department_id: 5
    },
    {
        product_name: 'Trash Bags',
        product_id: 20,
        product_description: 'Heavy-duty gallon trash bags, 30 ct',
        img: '../public/trash-bags.jpg',
        price: 2.59,
        department_id: 5
    },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;