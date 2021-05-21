import db from "./db"


db_connection.promise()
.execute("SELECT * FROM employee_tracker.employee;")
.then(([rows]) => {
    // show the first user name
    console.log(rows[0].name);
    // show the all users name
    rows.forEach(user => {
        console.log(user.name);
    });
}).catch(err => {
    console.log(err);
});