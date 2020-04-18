var config = require('./config');
var express = require('express');
var fs = require('fs');

// Create an Express web app
var app = express();

//Create API root Endpoint to listen to
app.get('/', function (req, res) {
    res.send('<font size="7" color="red">Hello World from a NodeJS Application with reload</font>');
});
app.get('/hello', function (req, res) {
    res.send('<font size="7" color="red">Hello World from a NodeJS Application</font>');
});

app.get('/break', function(req, res) {
    fs.readFile('item.txt', function(data, err){
        console.log('reading the not exist file');
        res.send(data);
    })
});

// Create an HTTP server to run our application
var server = app.listen(config.PORT, function () {
    console.log('Hello World Application running on port ' + config.PORT + "!!!");
});