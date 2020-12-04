
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
    try {
        let books = [];
        let axiosRes =  await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${req.query.search}&key=${process.env.GOOGLE_API_KEY}`);
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
        console.log(books);
        res.render('book-search')
    } catch (err) {
        console.log(err);
    }

})




module.exports = router;