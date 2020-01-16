//dependencies 
const router = require('express').Router();

let userID;

//check if user is logged in 
const authCheck = (req, res, next) => {
    if (!req.user) {
        //if user is not logged in 
        res.redirect('/auth/login');
    } else {
        //if logged in
        next();
    }
}

//base rout for profile
router.get('/', authCheck, (req, res) => {
    res.render('../views/profile.ejs', { user: req.user.user_name, id: req.user.id });
    console.log('username: ' + req.user.user_name);
    userID = req.user.user_name;
})


//export router
module.exports = router, userID;