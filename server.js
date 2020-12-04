const express = require('express');
const ejsLayouts = require('express-ejs-layouts');
const db = require('./models');
const flash = require('connect-flash');
const session = require('express-session');

const passport = require('passport');

const app = express();

// Passport Config
require('./config/passport')(passport);

// Static files
app.use('/static', express.static('public'));

// Ejs setup
app.use(ejsLayouts);
app.set('view engine', 'ejs');

// Body parser
app.use(express.urlencoded({ extended: false }));

// Express Session
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true,
}));



// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

// Connect Flash
app.use(flash());

// Global Vars
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
})

// Routes
app.use('/', require('./routes/index'))
app.use('/users', require('./routes/usersAuth'));
app.use('/profile', require('./routes/userProfile'));


// PORT
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("SERVER LIVE ON PORT 3000");
});