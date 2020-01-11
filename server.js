const express = require('express');
const path = require('path');
const exersizes = require('./data/exersizes');
const app = express();

// body parser middleware:
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// set static folder (use is keyword for middleware):
app.use(express.static(path.join(__dirname, 'public')))

//app.use('/api/control', require(exersizes))

console.log(exersizes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log('server started on port ' + PORT));

