const express = require('express');
const router = express.Router();
const passport = require('passport');
const db = require('../models');

router.get('/', (req, res) => {
    console.log(req.user);
    res.render('profile');
})



router.get('/find-books', (req, res) => {
    console.log('query');
    res.render('book-search')
})




module.exports = router;