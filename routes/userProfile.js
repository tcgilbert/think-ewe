
const express = require('express');
const router = express.Router();
const axios = require('axios');
const passport = require('passport');
const db = require('../models');

router.get('/', (req, res) => {
    console.log(req.user);
    res.render('profile');
})


router.get('/find-books', async (req, res) => {
    console.log(req.query);
    let axiosRes =  await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${req.query.search}&key=${process.env.GOOGLE_API_KEY}`)
    console.log(axiosRes.data.items);
    res.render('book-search')
})




module.exports = router;