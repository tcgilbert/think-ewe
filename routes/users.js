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
   
    // Display errors or create user
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
                        password
                    }
                }).then(([user, created]) => {
                    
                    if(created) {
                        res.render('dashboard', { user })
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