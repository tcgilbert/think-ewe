const express = require('express');
const router = express.Router();
const passport = require('passport');
const db = require('../models');


// Login Page
router.get('/login', (req, res) => {
    res.render('login')
});

// Login Handle
router.post('/login', (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: '/dashboard',
        failureRedirect: '/users/login',
        failureFlash: true
    })(req, res, next);
});

// Logout Handle
router.get('/logout', (req, res) => {
    req.logout();
    req.flash('success_msg', 'You have successfully logged out');
    res.redirect('/users/login')
})

// Registration Page
router.get('/register', (req, res) => {
    res.render('register')
});

// Registration Handle
router.post('/register', async (req, res) => {
    const { fullname, email, username, password, password2, bio } = req.body;
    console.log(bio);
    let errors = [];

    // Check required fields
    if(!fullname || !email || !password || !password2 || !username) {
        errors.push({ msg: "Please fill in all fields" })
    }

    // Check Email
    function emailIsValid(ele) {
        return /\S+@\S+\.\S+/.test(ele);
    }

    if (!emailIsValid(email)) {
        errors.push({ msg: "Email is not valid" })
    }

    // Check passwords match
    if (password !== password2) {
        errors.push({ msg: "Passwords do not match"})
    }

    // Chack password length
    if (password.length < 6) {
        errors.push({ msg: "Password must be at least 6 characters"})
    }
   
    // Display errors or Create user
    if (errors.length > 0) {
        res.render('register', {
            errors,
            fullname,
            username,
            email,
            password,
            password2
        })
    } else {
        // Validation passed
        db.user.findOne({ where: { email: email } })
        .then((user) => {
            if(user) {
                errors.push( {msg: "User with that email already exists"} );
                res.render('register', {
                    errors,
                    fullname,
                    username,
                    email,
                    password,
                    password2
                });
            } else {
                db.user.findOrCreate({
                    where: {
                        username: username,
                    },
                    defaults: {
                        fullname,
                        email,
                        password,
                        bio
                    }
                }).then(([user, created]) => {   
                    if(created) {
                        req.flash('success_msg', 'You are now registered and can log in');
                        res.redirect('/users/login')
                    } else {
                        errors.push( { msg: "Username is not availible" });
                        res.render('register', {
                            errors,
                            fullname,
                            username,
                            email,
                            password,
                            password2
                        });
                    } 
                })
            }
        });
    }
})

module.exports = router;