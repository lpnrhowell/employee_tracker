const mysql = require("mysql");
const main = require('../employeeDB')

const db = mysql.createConnection({
	host: "localhost",
	port: 8889,
	user: "root",
	password: "root",
	database: "employee_trackerdb",
});

db.connect((err) => {
	if (err) throw err;
main.homeMenu()
});
module.exports = db;
