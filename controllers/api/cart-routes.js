const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Cart } = require('../../models');
const autho = require('../../utils/auth');

//view all items in cart
router.get('/:user_id', (req, res) => {
    Cart.findAll({
        where: {
            user_id: req.params.user_id
        }
    })
    .then(dbCartData => res.json(dbCartData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

//view singular item in cart
router.get('/:user_id/:id', (req, res) => {
    Cart.findOne({
        where: {
            user_id: req.params.user_id,
            id: req.params.id
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
router.post('/:user_id', autho, (req, res) => {
        Cart.create(req.body, {
            where: {
                user_id: req.params.user_id,
                id: req.params.id,
                quantity: req.params.quantity
            },
        })
        .then(dbCartData => res.json(dbCartData))
        .catch((err) => {
            console.log(err);
            res.status(400).json(err);
        })
    });

//modify number of items in cart
router.put('/:user_id/:id', autho, (req, res) => {
    Cart.update(req.body, {
        where: {
            user_id: req.params.user_id,
            id: req.params.id,
            quantity: req.params.quantity
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
router.delete('/:user_id/:id', autho, (req, res) => {
    Cart.destroy({
        where: {
            user_id: req.params.user_id,
            id: req.params.id
        },
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