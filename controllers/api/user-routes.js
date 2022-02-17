const router = require('express').Router();
const { Cart, User } = require('../../models');


//View all users
router.get("/", (req, res) => {
    User.findAll({
        attributes: { exclude: ['password'] }
    })
    .then((dbUserData) => res.json(dbUserData))
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    })
});

//View a single user and their cart
router.get("/:id", (req, res) => {
    User.findOne({
        attributes: { exclude: ['password'] },
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

//Create new user
router.post('/', (req, res) => {
    User.create(req.body)
    .then(dbUserData => {
        req.session.save(() => {
            req.session.user_id = dbUserData.id;
            req.session.loggedIn = true;

            res.json(dbUserData);
        });
    });
});

router.post('/login', (req, res) => {
    User.findOne({
        where: {
            email: req.body.email
        }
    })
        .then(dbUserData => {
            if(!dbUserData) {
                res.status(400).json({ message: "No user with that email address" });
                return;
            }
           
            const validPassword = dbUserData.checkPassword(req.body.password);
            if(!validPassword) {
                res.status(400).json({ message: 'Incorrect password '});
                return;
            }

            req.session.save(() => {
                req.session.user_id = dbUserData.id;
                req.session.loggedIn = true;

                res.json({ user: dbUserData, message: 'You are now logged in!' });
            });
        });
});

//Change user info
router.put('/:id', (req, res) => {
    User.update(req.body, {
        where: {
            id: req.params.user_id,
        },
    })
    .then((dbUserData) => {
        if (!dbUserData) {
            res.status(404).json({ message: "No user found with this ID" });
            return;
        }
        res.json(dbUserData);
    })
});

//Delete user
router.delete(':/id', (req, res) => {
    User.destroy({
        where: {
            id: req.params.user_id
        }
    })
    .then(dbUserData => {
        if (!dbUserData) {
            res.status(404)({ message: 'No user found with this ID' });
            return;
        }
        res.json(dbUserData);
    })
});

router.post('/logout', (req, res) => {
    if(req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
})

module.exports = router;