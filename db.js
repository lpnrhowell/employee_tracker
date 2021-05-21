const mysql = require('mysql2');
require('dotenv').config()

const db = mysql.createConnection({
    host     : 'localhost',
    port     : 8889,
    database : 'employee_tracker',
    user     : 'root',
    password : 'password',
    
});

db.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

// db.promise()
// .execute("SELECT * FROM employee_tracker.employee;")
// .then((rows) => {
//     // show the first user name
//     console.log(rows[0].name);
//     // show the all users name
//     // rows.forEach(user => {
//     //     console.log(user.name);
//     // });
// }).catch(err => {
//     console.log(err);
// });
db.execute(
"SELECT * FROM `employee`",
(error, result) => {
  console.log(result);
  result.forEach(duk => {
        console.log(duk.first_name);
  })
}
);