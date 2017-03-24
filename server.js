var express = require('express');

var app = express();

// static files
app.use(express.static(__dirname + '/dist/'));

// app.METHOD(PATH, HANDLER)
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

// app.get('/get', function(req, res) {
//     request
//         .get('http://qiita.com/api/v2/items?page=1&per_page=20')
//         .end(function(apiErr, apiRes) {
//             res.render(__dirname + '/routes/itemlist', { items: apiRes.body });
//         });
// });

app.listen(3000, function() {
    console.log('Express server starts listening on port:3000');
});