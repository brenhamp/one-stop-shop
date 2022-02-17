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
    where: {department_id: 1},
    raw: true
})
.then((dbDepartmentData) => {
    if(!dbDepartmentData) {
        res.status(404).json({ message: "No department found with this ID"});
        return;
    }
    JSON.stringify(dbDepartmentData);
    console.log(dbDepartmentData);
    res.render('produce', {dbDepartmentData});
})
.catch((err) => {
    console.log(err);
    res.status(500).json(err);
});
});

router.get('/dairy', (req, res) => {
  Product.findAll({
    where: {department_id: 2},
    raw: true
})
.then((dbDepartmentData) => {
    if(!dbDepartmentData) {
        res.status(404).json({ message: "No department found with this ID"});
        return;
    }
    JSON.stringify(dbDepartmentData);
    console.log(dbDepartmentData);
    res.render('produce', {dbDepartmentData});
})
.catch((err) => {
    console.log(err);
    res.status(500).json(err);
});
});

router.get('/meat', (req, res) => {
  Product.findAll({
    where: {department_id: 3},
    raw: true
})
.then((dbDepartmentData) => {
    if(!dbDepartmentData) {
        res.status(404).json({ message: "No department found with this ID"});
        return;
    }
    JSON.stringify(dbDepartmentData);
    console.log(dbDepartmentData);
    res.render('produce', {dbDepartmentData});
})
.catch((err) => {
    console.log(err);
    res.status(500).json(err);
});
});

router.get('/pantry', (req, res) => {
  Product.findAll({
    where: {department_id: 4},
    raw: true,  
})
.then((dbDepartmentData) => {
    if(!dbDepartmentData) {
        res.status(404).json({ message: "No department found with this ID"});
        return;
    }
    JSON.stringify(dbDepartmentData);
    console.log(dbDepartmentData);
    res.render('produce', {dbDepartmentData});
})
.catch((err) => {
    console.log(err);
    res.status(500).json(err);
});
});

router.get('/essentials', (req, res) => {
  Product.findAll({
    where: {department_id: 5},
    raw: true
})
.then((dbDepartmentData) => {
    if(!dbDepartmentData) {
        res.status(404).json({ message: "No department found with this ID"});
        return;
    }
    JSON.stringify(dbDepartmentData);
    console.log(dbDepartmentData);
    res.render('produce', {dbDepartmentData});
})
.catch((err) => {
    console.log(err);
    res.status(500).json(err);
});
});

module.exports = router;