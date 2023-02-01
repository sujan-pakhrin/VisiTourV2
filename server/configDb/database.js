const mysql = require('mysql');

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database:"visitour"
});

// con.connect(function(err) {
//     if (err) throw err;
//     con.query("SELECT * FROM user", function (err, result, fields) {
//       if (err) throw err;
//       console.log(result);
//     });
//   });

// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//     con.query(mysql, function (err, result) {
//       if (err) throw err;
//       console.log("Result: " + result);
//     });
//   });

module.exports = db;
