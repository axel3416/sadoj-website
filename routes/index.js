module.exports = (server) => {
	const express = require('express'),
		bodyParser = require('body-parser'),
		app = express(),
		router = express.Router();
	//get the index of the site and render the view into it. it's basically the equivalent of doing res.send('<html>website is inside of here</html>');
	router.get('/', function(req, res) {
		res.render('home.ejs');
	});
	router.get('/departments', function(req, res) {
		res.render('departments.ejs');
	});
	router.get('/staff', function(req, res) {
		res.render('staff.ejs');
	});
	router.get('/forum', function(req, res) {
		res.render('forum.ejs');
	});
	return router;
};
