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

	var sql = "Select * from students";

	conn.query(sql, (err, res, fields) => {
		if(err) throw err;
		res.forEach((row) => {
			console.log(`Hello ${row.name}`)
		})
		//console.log(fields);
	})
})
