const express = require('express');
const UserController = require('./controllers/UserController');
const path = require('path');
const publicpath = path.join(__dirname, 'public');

const routes = express.Router();

//Routes

//View
routes.get('/', function(req, res) {
    res.sendFile(path.join(publicpath, 'index.html'));
});

//API Call's
routes.get('/users', UserController.index);

module.exports = routes;