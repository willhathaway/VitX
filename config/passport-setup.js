//dependencies 
const passport = require('passport');
const GoogleStrat = require('passport-google-oauth20');
const keys = require('./keys');
const db = require('../models');

passport.serializeUser((user, done) => {
    done(null, db.user.id);
});


//use google startegy 
passport.use(
    new GoogleStrat({
        //options for the strategies
        callbackURL: '/auth/google/redirect',
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret
    }, (accessToken, refreshToken, profile, done) => {

        //check database for user
        db.user.findOne({ googleID: profile.id }).then((currentUser) => {
            if (currentUser) {
                //already have a user
                console.log('User is: ' + currentUser.user_name);
                done(null, currentUser);
            } else {
                //create new user
                db.user.create({
                    user_name: profile.displayName,
                    googleID: profile.id

                }).then((newUser) => {
                    console.log("New User: " + newUser.user_name);
                    done(null, newUser);
                });
            }
        })



    })
)