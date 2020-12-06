const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/auth');
const db = require('../models');


// Welcome Page
router.get('/', (req, res) => {
  console.log(req.user);
    if (req.user == null) {
      res.render('welcome', { isLoggedIn: false})
    }
})

// Dashboard
router.get('/dashboard', ensureAuthenticated, (req, res) => {
    if (req.user.registered) {
        res.redirect('/profile');
    } else {
        res.render('dashboard', { user: req.user, isLoggedIn: true });
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