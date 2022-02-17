const router = require('express').Router();
const sequelize = require('../config/connection');

router.get('/', (req, res) => {
    res.render('homepage');
});
  
router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/produce', (req, res) => {
  res.render('produce');
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