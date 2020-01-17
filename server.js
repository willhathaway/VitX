// dependencies backend

const express = require('express');
const path = require('path');
const exercises = require('./data/exercises');
const app = express();
const bodyParser = require('body-parser');

//dependencies auth

const authRoutes = require('./routes/auth/auth-routes');
const profileRoutes = require('./routes/auth/profile-routes');
const passportSetup = require('./config/passport-setup.js');
const models = require('./models');
const cookieSession = require('cookie-session');
const keys = require('./config/keys');
const passport = require('passport');


// body parser middleware:

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// set static folder (use is keyword for middleware):
app.use(express.static(path.join(__dirname, 'views')))

//app.use('/api/control', require(exercises))

//console.log(exercises);

require("./routes/api/apiRoutes")(app);
// require("./routes/html/htmlRoutes")(app);

//set up view engine 
app.set('view engine', 'ejs');
app.use(express.static("views"))

//use cookie seesion
app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [keys.session.cookieKey]
}));

models.sequelize.sync().then(() => {
    app.listen(PORT, () => console.log('server started on port ' + PORT));

})

//passaport init and use cookie
app.use(passport.initialize());
app.use(passport.session());

//set up routes
app.use('/auth', authRoutes)
app.use('/profile', profileRoutes)

//create home route
app.get('/', (req, res) => {
    res.render('login');
});

const PORT = process.env.PORT || 5000;


