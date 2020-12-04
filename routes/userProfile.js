
const express = require('express');
const router = express.Router();
const axios = require('axios');
const passport = require('passport');
const db = require('../models');
const { ensureAuthenticated } = require('../config/auth');

router.get('/', ensureAuthenticated, (req, res) => {
    console.log(req.user);
    let book = {
        create: false,
    }
    res.render('profile', { book });
})


router.get('/find-books', async (req, res) => {
    console.log(req.query);
    let books = [];
    try {
        if (req.query.search) {
            let axiosRes =  await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${req.query.search}&maxResults=20&key=${process.env.GOOGLE_API_KEY}`);
            let resArray = axiosRes.data.items;
    
            resArray.forEach((ele) => {
                    let book = {
                        title: ele.volumeInfo.title,
                        authors: ele.volumeInfo.authors,
                        publisher: ele.volumeInfo.publisher,
                        publishedDate: ele.volumeInfo.publishedDate,
                        imgUrl: ele.volumeInfo.imageLinks.thumbnail
                    }
                    books.push(book)
            })
        }
        res.render('book-search', { books });
    } catch (err) {
        console.log("This error was caught " + err);
    }
})

router.post('/create-post', (req, res) => {
    console.log(req.body);
    let book = {
        title: req.body.title,
        authors: req.body.authors,
        imgUrl: req.body.imageUrl,
        create: true
    }
    res.render('profile', { book } );
})




module.exports = router;