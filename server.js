var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(express.static('build'));


app.listen(process.env.PORT || 8080, process.env.IP);