const express = require('express');
const session = require('express-session');
const router = express.Router();
const db = require('../models');

router.get('/', (req, res) => {
    res.render('login');
})

router.post('/', (req, res, next) => {
    if (req.body.email && req.body.password) {

    } else {
        let err = new Error('Email and password are required');
        err.status = 401;
        return next(err);
    }
})




module.exports = router;