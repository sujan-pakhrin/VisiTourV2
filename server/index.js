// server/index.js
const mysql = require('mysql');
const express = require("express");
const db = require('./configDb/database')
const cors = require('cors')
const bcrypt = require("bcrypt")

const PORT = process.env.PORT || 5000;
const app = express();
app.use(express.json());
app.use(cors());


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!!!" });
});

app.get("/api/user", (req, res) => {
  db.query("SELECT * FROM user", (err, result) => {
    if (err) {
      console.log(err)
    }
    res.send(result)
  });
});

app.post("/api/signin1", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  var sql = 'SELECT * FROM user WHERE UserEmail = ' + mysql.escape(email);;
  db.query(sql, (err, result) => {
    if (err) {
      res.send({ success: 0, statusCode: 500, message: "SELECT * FROM user WHERE UserEmail Query Failed", error: err })
      // console.log(err)
    }
    else if (result.length <= 0) {
      // res.send("Wrong email");
      res.send({ success: 0, statusCode: 200, message: "You Entered Email is not a valid email" })

    } else {
      sql = 'SELECT UserPassword FROM user WHERE UserEmail = ' + mysql.escape(email);
      db.query(sql, (err, result) => {
        if (err)
          // console.log(err)
          res.send({ success: 0, statusCode: 500, message: "SELECT UserPassword FROM user WHERE UserEmail Query Failed", error: err })

        else {
          // res.send(result[0].UserPassword)
          bcrypt.compare(password, result[0].UserPassword, function (err, re) {
            if (re) {
              // res.send("Loged In");
              res.send({ success: 1, statusCode: 200, message: "Sign In Sucesfully" })

            }
            else {
              // res.send("Wrong password");
              res.send({ success: 0, statusCode: 200, message: "You Entered The Wrong Password" })

            }
          });
        }
      });
    }
  });
});

app.post("/api/signup", async (req, res) => {

  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  const userDOB = req.body.dob;
  const userAddress = req.body.address;
  const userPhone = req.body.phone;

  var sql = 'SELECT * FROM user WHERE UserEmail = ' + mysql.escape(email);
  db.query(sql, (err, result) => {
    if (err)
      res.send({ success: 0, statusCode: 500, message: "SELECT * FROM user WHERE UserEmail Query Failed", error: err })
    else if (result.length > 0) {
      res.send({ success: 0, statusCode: 200, message: "Email already exists" })
    }
    else {
      var sql = 'SELECT * FROM user WHERE UserPhone = ' + mysql.escape(userPhone);
      db.query(sql, (err, result) => {
        if (err)
          res.send({ success: 0, statusCode: 500, message: "SELECT * FROM user WHERE UserPhone Query Failed", error: err })

        else if (result.length > 0) {
          res.send({ success: 0, statusCode: 200, message: "Phone Number already exists" })
        }
        else {
          bcrypt.hash(password, 10, function (err, hash) {
            sql = "INSERT INTO user (UserName, UserEmail, UserPassword, UserDOB, UserAddress, UserPhone) VALUES (?)";
            var values = [username, email, hash, userDOB, userAddress, userPhone];
            db.query(sql, [values], (err, result) => {
              if (err)
                res.send({ success: 0, statusCode: 500, message: "INSERT INTO user (UserName, UserEmail, UserPassword, UserDOB, UserAddress, UserPhone) Query Failed", error: err })
              else {
                res.send({ success: 1, statusCode: 200, message: "Sign Up Sucesfully" })
                // res.send(result)
              }
            })
          })
        }
      });
    }
  });
});

app.post("/api/test", (req, res) => {
  res.send({ success: 1, statusCode: 200, message: "Sign Up Sucesfully" })
});



app.post("/api/staff", (req, res) => {
  db.query("SELECT * FROM user WHERE IsStaff", (err, result) => {
    if (err) {
      console.log(err)
    }
    res.send(result)
  });
});

app.post("/api/package", (req, res) => {
  db.query("SELECT * FROM package", (err, result) => {
    if (err) {
      console.log(err)
    }
    res.send(result)
  });
});

app.post("/api/agency", (req, res) => {
  db.query("SELECT * FROM agency", (err, result) => {
    if (err) {
      console.log(err)
    }
    res.send(result)
  });
});

// app.patch("/api/updateStaff", (req, res) => {
//   const id=req.body.id
//   const data=req.body;
//   db.query("UPDATE user SET ? Where UserId=?",[data,id] ,(err, result) => {
//     if (err) {
//       console.log(err)
//     }
//     res.send(result)
//   });
// });

// app.patch("/api/updateStaff", (req, res) => {
//   const user = req.body;
//   db.query("UPDATE user SET UserName=?, UserEmail=?, UserDOB=?, UserAddress=?, UserPhone=? WHERE UserId=?",
//     [user.username, user.email, user.dob, user.address, user.phone, user.UserId],
//     (err, result) => {
//       if (err) {
//         console.error(err);
//         res.send({ error: "Could not update user" });
//         return;
//       }
//       res.send(result);
//     });
// });


app.patch("/api/updateStaff", async (req, res) => {

  const username = req.body.username;
  const email = req.body.email;
  const UserId=req.body.UserId;
  const dob = req.body.dob;
  const address = req.body.address;
  const phone = req.body.phone;

  var sql = 'SELECT * FROM user WHERE UserEmail = ' + mysql.escape(email);
  db.query(sql, (err, result) => {
    if (err)
      res.send({ success: 0, statusCode: 500, message: "SELECT * FROM user WHERE UserEmail Query Failed", error: err })
    else if (result.length > 0) {
      res.send({ success: 0, statusCode: 200, message: "Email already exists" })
    }
    else {
      var sql = 'SELECT * FROM user WHERE UserPhone = ' + mysql.escape(phone);
      db.query(sql, (err, result) => {
        if (err)
          res.send({ success: 0, statusCode: 500, message: "SELECT * FROM user WHERE UserPhone Query Failed", error: err })

        else if (result.length > 0) {
          res.send({ success: 0, statusCode: 200, message: "Phone Number already exists" })
        }
        else {
          db.query("UPDATE user SET UserName=?, UserEmail=?, UserDOB=?, UserAddress=?, UserPhone=? WHERE UserId=?",
            [username, email, dob, address, phone, UserId],
            (err, result) => {
              if (err)
                res.send({ success: 0, statusCode: 500, message: "Update INTO user  Query Failed", error: err })
              else {
                res.send({ success: 1, statusCode: 200, message: "Update Sucesfully" })
                // res.send(result)
              }
            });
          // bcrypt.hash(password, 10, function (err, hash) {
          //   sql = "INSERT INTO user (UserName, UserEmail, UserPassword, UserDOB, UserAddress, UserPhone) VALUES (?)";
          //   var values = [username, email, hash, userDOB, userAddress, userPhone];
          //   db.query(sql, [values], (err, result) => {
          //     if (err)
          //       res.send({ success: 0, statusCode: 500, message: "INSERT INTO user (UserName, UserEmail, UserPassword, UserDOB, UserAddress, UserPhone) Query Failed", error: err })
          //     else {
          //       res.send({ success: 1, statusCode: 200, message: "Sign Up Sucesfully" })
          //       // res.send(result)
          //     }
          //   })
          // })
        }
      });
    }
  });
});




