const express = require('express');
const ejsLayouts = require('express-ejs-layouts');
const db = require('./models');
const flash = require('connect-flash');
const session = require('express-session');

const app = express();

// ejs setup
app.use(ejsLayouts);
app.set('view engine', 'ejs');

//body parser
app.use(express.urlencoded({ extended: false }));

// Express Session
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true,
}));

// Connect Flash
app.use(flash());

// Global Vars
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    next();
})


//routes
app.use('/', require('./routes/index'))
app.use('/users', require('./routes/users'));


// PORT
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("SERVER LIVE ON PORT 3000");
});