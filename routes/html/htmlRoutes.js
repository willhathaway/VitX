// controls routing etc for api

const express = require('express');

const path = require('path');

const exersizes = require('../../data/exersizes');

const router = express.Router();

module.exports = function (app) {

    app.get('/', (req, res) => res.sendFile(path.join(__dirname, "../../public/html/index.html")));

}