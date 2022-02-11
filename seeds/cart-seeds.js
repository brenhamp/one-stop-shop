const { Cart } = require("../models");

const cartData = [
    {
        product_name: "Bananas",
        quantity: 3,
        product_id: 1,
        user_id: 1
    },
    {
        product_name: "Bananas",
        quantity: 3,
        product_id: 1,
        user_id: 1
    },
    {
        product_name: "Whole Milk",
        quantity: 1,
        product_id: 5,
        user_id: 1
    },
    {
        product_name: "Ground Beef",
        quantity: 2,
        product_id: 9,
        user_id: 2
    },
    {
        product_name: 'Chicken Breasts',
        product_id: 10,
        quantity: 3,
        user_id: 2
    },
    {
        product_name: 'Canned Tuna',
        product_id: 13,
        quantity: 4,
        user_id: 2
    },
    {
        product_name: 'Toilet Paper',
        product_id: 17,
        quantity: 1,
        user_id: 3
    },
    {
        product_name: 'Aluminum Foil',
        product_id: 19,
        quantity: 4,
        user_id: 3
    }

];

const seedCart = () => Cart.bulkCreate(cartData);

module.exports = seedCart;