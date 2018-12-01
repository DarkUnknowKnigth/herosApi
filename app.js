var express = require('express');
var app = express();
var heroController = require('./controller/hero');
var path = require('path');
var Hero = require('./model/hero');
var morgan = require('morgan');
//set path
app.set('image', path.join(__dirname, 'image'));
//controlling the routes
app.use(morgan('dev'));

app.get('/v1/image/:file', (req, res) => {
    let file = req.params.file;
    path = file.split('.');
    if (path[1] == "jpg") {
        try {
            res.sendfile('image/' + file);
        } catch (e) {
            res.status(404);
            res.send({ 'error': "the file dosen't exixs" });
        }
    } else {
        res.status(500);
        res.send({ 'error': 'your image request have to end with: .jpg' })
    }
});
//routes
app.get('/v1', (req, res) => {
    res.send({ 'api': "API-Hero v1.1", 'description': "This API returns heros" });
});
app.get('/v1/hero/all', heroController.all);
app.get("*", (req, res) => {
    res.send({ 'error': 'sorry, this route is not valid' })
});
module.exports = app;