const express = require("express");
const router = express.Router();
const axios = require("axios");
const passport = require("passport");
const db = require("../models");
const { ensureAuthenticated } = require("../config/auth");

router.get("/", ensureAuthenticated, async (req, res) => {
  let posts = await db.book_post.findAll({
    where: {
      userId: req.user.dataValues.id,
    },
  });
  console.log(req.user);
  let book = {
    create: false,
  };
  res.render("profile", { book, posts, user: req.user.dataValues });
});

router.post('/', async (req, res) => {
    console.log(req.body);
    let [bookPost, created] = await db.book_post.findOrCreate({
      where: {
        userId: req.body.userId,
        title: req.body.title
      },
      defaults: {
        title: req.body.title,
        author: req.body.author,
        cover: req.body.cover,
        rating: req.body.rating,
        blurb: req.body.blurb,
        userId: req.body.userId
      }
    });
    

    res.redirect('/profile');
})

router.get("/find-books", async (req, res) => {
  let books = [];
  console.log(req.user)
  try {
    if (req.query.search) {
      let axiosRes = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${req.query.search}&maxResults=20&key=${process.env.GOOGLE_API_KEY}`
      );
      let resArray = axiosRes.data.items;

      if (resArray !== "undefined") {
          resArray.forEach((ele) => {
            if (ele.volumeInfo.title 
                && ele.volumeInfo.authors
                && ele.volumeInfo.publisher
                && ele.volumeInfo.publishedDate
                && ele.volumeInfo.imageLinks) {
                    let book = {
                      title: ele.volumeInfo.title,
                      authors: ele.volumeInfo.authors,
                      publisher: ele.volumeInfo.publisher,
                      publishedDate: ele.volumeInfo.publishedDate,
                      imgUrl: ele.volumeInfo.imageLinks.thumbnail
                    };
                    books.push(book);
                }
          });
        }
        res.render("book-search", { books, listBooks: true });
      } else {
          res.render("book-search", { listBooks: false });
      }
  } catch (err) {
    console.log("This error was caught " + err);
  }
});

router.get("/create", async (req, res) => {
  
  let posts = await db.book_post.findAll({
    where: {
      userId: req.user.dataValues.id,
    },
  });
  let book = {
    title: req.query.title,
    authors: req.query.authors,
    imgUrl: req.query.imageUrl,
    create: true,
  };
  res.render("profile", { book, posts, user: req.user.dataValues });
});

module.exports = router;
