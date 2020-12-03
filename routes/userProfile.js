const express = require('express');
const router = express.Router();
const passport = require('passport');
const db = require('../models');

router.get('/', (req, res) => {
    console.log(req.user);
    res.render('profile');
})

router.get('/create-post', (req, res) => {
    console.log('heyy');
    res.render('book-search')
})

router.get('/books', (req, res) => {
    console.log(req.query);
    res.send('book results')
})

module.exports = router;