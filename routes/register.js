const express = require('express');
const session = require('express-session');
const router = express.Router();
const db = require('../models');

router.get('/', (req, res) => {
    res.render('register');
});

router.post('/', async (req, res) => {
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
    req.session.user = {
        isAuthenticated: true
    }
})

module.exports = router;