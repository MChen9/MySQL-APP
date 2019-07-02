var faker = require('faker');
// console.log(faker.internet.email());
// console.log(faker.date.past());
// console.log(faker.address.city());

// function generateAddress(){
//   console.log(faker.address.streetAddress());
//   console.log(faker.address.city());
//   console.log(faker.address.state());
// }
// generateAddress();

// npm init -y

// sudo service mysql start
// sudo service mysql stop
// mysql -p

var mysql = require('mysql');

var connection = mysql.createConnection({
	host: 'Localhost',
	user: 'root',
	database: 'join_us',
	password: '123456'
});

// selecting data
// var q = 'insert into users(email) values(\'sss@adsd.com\')';
// connection.query(q, function (error, results, fields) {
//   if (error) throw error;
//   console.log(results);
// });


// for (var i = 0; i < 500; i++) {
// 	var person = {email: faker.internet.email()};
// 	connection.query('insert into users set ?', person, function (error, results) {
//   	if (error) throw error;
//   		console.log(results);
// 	});
// }



var q = 'select monthname(created_at) as month, count(created_at) from users group by month';
connection.query(q, function (error, results, fields) {
if (error) throw error;
	console.log(results);
});


