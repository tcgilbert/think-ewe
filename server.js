const express = require('express');
const ejsLayouts = require('express-ejs-layouts');
const bcrypt = require('bcrypt');
const db = require('./models');
const session = require('express-session');
const app = express();
// ejs setup
app.set('view engine', 'ejs');
app.use(ejsLayouts);

//body parser
app.use(express.urlencoded({ extended: false }));

// session
app.use(session({
    secret: 'd4ef00cb7eb759d8f232fd0a',
    resave: true,
    saveUninitialized: false
}))

//routes
app.get('/', (req, res) => {
    res.send('hello from server.js');
});

app.use('/register', require('./routes/register'));
app.use('/login', require('./routes/login'));

// PORT
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("SERVER LIVE ON PORT 3000");
});