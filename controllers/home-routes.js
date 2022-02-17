const router = require('express').Router();
const sequelize = require('../config/connection');
const { Department, Product } = require("../models");

router.get('/', (req, res) => {
    res.render('homepage');
});
  
router.get('/login', (req, res) => {
    res.render('login');
});

// router.use('/produce', (req, res, next) => {
//   res.render('produce');
//   next();
// })

router.get('/produce', (req, res) => {
  Product.findAll({
    where: {department_id: 1}
})
.then((dbDepartmentData) => {
    if(!dbDepartmentData) {
        res.status(404).json({ message: "No department found with this ID"});
        return;
    }
    console.log(dbDepartmentData);
    res.render('produce');
})
.catch((err) => {
    console.log(err);
    res.status(500).json(err);
});
});

router.get('/dairy', (req, res) => {
  res.render('dairy');
});

router.get('/meat', (req, res) => {
  res.render('meat');
});

router.get('/pantry', (req, res) => {
  res.render('pantry');
});

router.get('/essentials', (req, res) => {
  res.render('essentials');
});

module.exports = router;