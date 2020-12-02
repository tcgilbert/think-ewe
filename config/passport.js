const LocalStrategy = require('passport-local').Strategy;
const db = require('../models');


module.exports = function(passport) {
    passport.use(
        new LocalStrategy({ usernameField: 'email'}, (email, password, done) => {
            // Match User
            db.user.findOne({ where: { email: email }})
            .then(user => {
                if(!user) {
                    return done(null, false, { message: "Email entered is not registered"})
                }
                else if(!user.validPassword(password)) {
                    return done(null, false, { message: "Password incorrect"})
                }
                else {
                    return done(null, user)
                }
            })
            .catch(err => console.log(err));
        })
    )
    passport.serializeUser((user, done) => {
        done(null, user.id)
    });

    passport.deserializeUser((id, done) => {
        db.user.findByPk(id)
        .then(user => {
            if (user) {
                done(null, user);
            }
        })
        .catch(err => {
            console.log(err);
        })
    });
}