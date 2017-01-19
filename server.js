var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

app.use(express.static('build'));

app.get('/*', function(req, res) {
   res.sendfile(path.join(__dirname, 'index.html'))
});


app.listen(process.env.PORT || 8080, process.env.IP);