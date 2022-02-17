const router = require('express').Router();
const autho = require('../utils/auth');

router.get('/', (req, res) => {
    res.render('homepage');
});

module.exports = router;