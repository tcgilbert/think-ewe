const express = require('express');
const router = express.Router();
const db = require('../models');


// Login Page
router.get('/login', (req, res) => {
    res.render('login')
})


// Registration Page
router.get('/register', (req, res) => {
    res.render('register')
});

// Registration Post
router.post('/register', async (req, res) => {
    const { fullname, email, username, password, password2 } = req.body;
    let errors = [];
    // Check required fields
    if(!fullname || !email || !password || !password2 || !username) {
        errors.push({ msg: "Please fill in all fields" })
    }

    // Check passwords match
    if (password !== password2) {
        errors.push({ msg: "Passwords do not match"})
    }

    // Chack password length
    if (password.length < 6) {
        errors.push({ msg: "Password must be at least 6 characters"})
    }

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
        res.send("Pass")
    }
})

module.exports = router;