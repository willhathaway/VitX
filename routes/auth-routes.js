//create instance of express router using Router method
const router = require('express').Router();
const passport = require('passport');
let db = require('../models/user');

//create login route
router.get('/login', (req, res) => {
    res.render('login');
    res.render('login');
});

//auth logout
router.get('/logout', (req, res) => {
    //handle with passport
    res.send('logging out');
})
//auth with google
router.get('/google', passport.authenticate('google', {
    scope: ['profile']
}));

//callback route for google to redirect to 
router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
    res.send('Bannanas!');
})

//export router
module.exports = router;