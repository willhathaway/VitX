//dependencies 
let express = require('express');
const app = express();
const authRoutes = require('./routes/auth-routes');
const profileRoutes = require('./routes/profile-routes');
const passportSetup = require('./config/passport-setup.js');
const db = require('./models');
const cookieSession = require('cookie-session');
const keys = require('./config/keys');
const passport = require('passport');


//set up view engine 
app.set('view engine', 'ejs');

//use cookie seesion
app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [keys.session.cookieKey]
}));

//passaport init and use cookie
app.use(passport.initialize());
app.use(passport.session());

//set up routes
app.use('/auth', authRoutes)
app.use('/profile', profileRoutes)

//create home route
app.get('/', (req, res) => {

    res.render('home');
});

//create /auth/google

//listen on port 8080
let port = 8080;
app.listen(port, () => {
    console.log("App is listening on port 8080")
});