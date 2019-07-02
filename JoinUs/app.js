var express = require('express');
var mysql = require('mysql');
var bodyParser  = require("body-parser");
var app = express();

app.set('view engine', 'ejs'); 
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));

var connection = mysql.createConnection({
	host: 'Localhost',
	user: 'root',
	database: 'join_us',
	password: '123456'
});

app.get("/", function(req, res){
	// res-respond
	// req-request
	// find count of users in db and respond with it
	var q = 'select count(email) as cnt from users';
	connection.query(q, function (error, results) {
	if (error) throw error;
		var count = results[0].cnt;
		// res.send('We have ' + count + ' users!');
		res.render('home', {data: count}); //read files, looking for views folder at default
	});
});

app.post("/register", function(req, res){
	// go through the form
	var person = {email: req.body.email};
	connection.query('insert into users set ?', person, function (error, results) {
  	if (error) throw error;
  		console.log(results);
	});
	res.redirect("/");
	// console.log("POST REQUEST SEND TO /REGISTER is " + req.body.email);
});

app.get("/joke", function(req, res){
	var joke = 'a thing that someone says to cause amusement or laughter, especially a story with a funny punchline.';
	res.send(joke);
});

app.get("/random_num", function(req, res){
	var num = Math.floor(Math.random() * 10) + 1;
	res.send('Your luck number is ' + num); // must be string
});

app.listen(8080, function(){
	console.log('server running at 8080!');
});
