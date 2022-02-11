const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Cart } = require('../../models');

//view all items in cart
router.get('/', (req, res) => {
    Cart.findAll()
    .then(dbCartData => res.json(dbCartData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

//view singular item in cart
router.get('/:id', (req, res) => {
    Cart.findOne({
        where: {
            id: req.params.cart_id,
        },
    })
    .then((dbCartData) => {
        if (!dbCartData) {
            res.status(404).json({ message: "No item in your cart with this ID!" });
            return;
        }
        res.json(dbCartData);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

//add item to cart
router.post('/', (req, res) => {
        Cart.create(req.body)
        .then(dbCartData => res.json(dbCartData))
        .catch((err) => {
            console.log(err);
            res.status(400).json(err);
        })
    });

//modify item in cart
router.put('/:id', (req, res) => {
    Cart.update(req.body, {
        where: {
            id: req.params.cart_id,
        },
    })
    .then((dbCartData) => {
        if (!dbCartData) {
            res.status(404).json({ message: "No item in your cart with this ID!" });
            return;
        }
        res.json(dbCartData);
    })
});

//delete item from cart
router.delete('/:id', (req, res) => {
    Cart.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbCartData => {
        if (!dbCartData) {
            res.status(404)({ message: 'No item in your cart with this ID!' });
            return;
        }
        res.json(dbCartData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

module.exports = router;