const db = require('./models');

// db.book_post.create({
//     title: "Test",
//     author: "Tester McTest",
//     cover: "http://books.google.com/books/content?id=s7sKxilR83YC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
//     rating: 1,
//     blurb: "test test test test test",
//     userId: 2
// }).then((res) => console.log(res));

db.user.update({
    fullname: "Tommy Gilspin"
}, {
    where: {
        id: 10
    }
}).then((res) => console.log(res));
