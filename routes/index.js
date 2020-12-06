const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/auth');
const db = require('../models');


// Welcome Page
router.get('/', (req, res) => {
    res.render('welcome')
})

// Dashboard
router.get('/dashboard', ensureAuthenticated, (req, res) => {
    if (req.user.registered) {
        res.redirect('/profile');
    } else {
        res.render('dashboard', { user: req.user });
    }

});

router.post('/dashboard', (req, res) => {
    let { bio, avatar } = req.body;
    db.user
    .update(
      {
        registered: true,
        bio,
        avatar
      },
      {
        where: {
          id: req.user.id,
        },
      }
    )
    .then((dbRes) => {
      res.redirect('/profile')
    });
});


module.exports = router;