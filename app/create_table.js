var mysql = require('mysql');

var conn = mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'',
	database: 'mydb'
});

conn.connect((err) => {
	if(err) throw err;
	console.log('Connection made!');

	var sql = `Create Table students(
            name varchar(50),
	    id varchar(10) Primary Key
	)`;

	conn.query(sql, (err,res) => {
		if(err) throw err;
		console.log("Table created");
	})
})
