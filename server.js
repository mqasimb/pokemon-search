var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

app.use(express.static('build'));

app.get('/*', function(req, res) {
	res.sendFile(path.join(__dirname, '/build/index.html'))
});

app.listen(process.env.PORT || 8080, process.env.IP);