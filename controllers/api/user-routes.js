const router = require('express').Router();
const { Cart, User } = require('../../models');

//View all users
router.get("/", (req, res) => {
    User.findAll
    .then((dbUserData) => res.json(dbUserData))
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    })
});

//View a single user and their cart
router.get("/:id", (req, res) => {
    User.findOne({
        include: [
            {
                model: Cart,
                attributes: ['cart_id', 'product_name', 'quantity', 'product_id'],
            },
        ],
    })
    .then ((dbUserData) => {
        if(!dbUserData) {
            res.status(404).json({ message: "No user found with this ID" });
            return;
        }
        res.json(dbDepartmentData);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;