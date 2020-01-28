var mysql = require('mysql');

var conn = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: ""
});

conn.connect((err) => {
	if(err) throw err;
	console.log("Connection made!");

	conn.query("Create Database mydb", (err,res) => {
		if(err) throw err;
		console.log("DB created!");
	});                              
});

