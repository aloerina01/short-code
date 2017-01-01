var express = require('express');
var request = require('superagent');

var app = express();

// config to use ejs template
app.set('view engine', 'ejs');

// app.METHOD(PATH, HANDLER)
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/routes/index.html');
});

app.get('/get', function(req, res) {
    request
        .get('http://qiita.com/api/v2/items?page=1&per_page=20')
        .end(function(apiErr, apiRes) {
            res.render(__dirname + '/routes/itemlist', { items: apiRes.body });
        });
});

app.listen(3000, function() {
    console.log('Express server starts listening on port:3000');
});
