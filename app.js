//dependencies 
let express = require('express');
const app = express();
const authRoutes = require('./routes/auth-routes');
const passportSetup = require('./config/passport-setup.js');
const db = require('./models');

//set up view engine 
app.set('view engine', 'ejs');

//set up routes
app.use('/auth', authRoutes)

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