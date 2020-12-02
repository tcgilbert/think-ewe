const express = require('express');
const app = express();
const ejsLayouts = require('express-ejs-layouts');
const bcrypt = require('bcrypt');
const db = require('./models');

// ejs setup
app.set('view engine', 'ejs');
app.use(ejsLayouts);

//body parser
app.use(express.urlencoded({ extended: false }));

//routes
app.get('/', (req, res) => {
    res.send('hello from server.js');
});

app.get('/register', (req, res) => {
    res.render('register');
});

app.post('/register', async (req, res) => {
    let { email, fullname, username, password } = req.body;
    console.log({
        email,
        fullname,
        username,
        password
    });
    db.user.create({
        email,
        fullname,
        username,
        password
    });
    // try {
    //     const salt = await bcrypt.genSalt(10);
    //     const hash = await bcrypt.hash(password, salt);
    //     db.User.create({
    //         email,
    //         fullname,
    //         username,
    //         password: hash
    //     })
    // } catch (err) {
    //     console.log(err);
    // }
})

// PORT
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("SERVER LIVE ON PORT 3000");
});