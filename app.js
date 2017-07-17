var express = require('express');
const bodyParser = require('body-parser')
var app = express();
var server = require('http').createServer(app);
var path = require('path');
const https = require('https');
const routes = require('./routes/index')(server);

app.use(express.static(__dirname + '/node_modules'));
app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', routes);

server.listen(3000, function()
{
	console.log('Server listening on port: 3000');
});
