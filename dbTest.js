const db = require('./models');

db.book_post.create({
    title: "Island",
    author: "Aldous Huxley",
    cover: "http://books.google.com/books/content?id=ARHtAQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    rating: 3,
    blurb: "I love this book sooo freaking much",
    userId: 1
}).then((res) => console.log(res));