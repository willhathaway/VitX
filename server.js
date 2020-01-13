const express = require('express');
const path = require('path');
const exersizes = require('./data/exersizes');
const app = express();
const bodyParser = require('body-parser');

// body parser middleware:
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// set static folder (use is keyword for middleware):
app.use(express.static(path.join(__dirname, 'public')))

//app.use('/api/control', require(exersizes))

//console.log(exersizes);

require("./routes/api/apiRoutes")(app);
require("./routes/html/htmlRoutes")(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log('server started on port ' + PORT));

