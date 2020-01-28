var mysql = require('mysql');

var conn = mysql.createConnection({
	host:"localhost",
	user:"root",
	password:"",
	database:"mydb"
});

conn.connect((err) => {
	if(err) throw err;
	console.log("Connection made!");

	var sql = `Insert into students
		Values('Abhinav', '09'),
		('Harsh', '22')`;

	conn.query(sql , (err, res) => {
		if(err) throw err;
		console.log("Rows Inserted!");
	})
})
