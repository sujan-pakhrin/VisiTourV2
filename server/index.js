// server/index.js
// import Cookies from "js-cookie";
const mysql = require('mysql');
const express = require("express");
const db = require('./configDb/database')
const cors = require('cors')
const bcrypt = require("bcrypt")
const Cookies = require('js-cookie');
const { response } = require('express');
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
  const IsStaff = req.body.IsStaff || 0;
  var sql = 'SELECT * FROM user WHERE UserEmail = ' + mysql.escape(email);
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
              sql = 'SELECT * FROM user WHERE UserEmail = ' + mysql.escape(email);
              db.query(sql, (err, result) => {
                // var message ={result.UserId,result.UserName,result.UserEmail};
                // var result=JSON.parse(result)
                if (IsStaff == 0)
                  res.send({ success: 1, statusCode: 200, message: result[0] })
                else {
                  if (result[0].IsStaff == null)
                    res.send({ success: 0, message: "You are not a staff" })
                  else
                    res.send({ success: 1, message: result[0] })
                }

              })

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
  const IsStaff = req.body.IsStaff || 0;
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
            var values = [];
            if (IsStaff === 0) {
              sql = "INSERT INTO user (UserName, UserEmail, UserPassword, UserDOB, UserAddress, UserPhone) VALUES (?)";
              values = [username, email, hash, userDOB, userAddress, userPhone];
            }
            else {
              sql = "INSERT INTO user (UserName, UserEmail, UserPassword, UserDOB, UserAddress, UserPhone, IsStaff) VALUES (?)";
              values = [username, email, hash, userDOB, userAddress, userPhone, 1];
            }
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
app.post("/api/add/agency", (req, res) => {
  var AgencyName = req.body.AgencyName
  var AgencyEmail = req.body.AgencyEmail
  var AgencyPhone = req.body.AgencyPhone
  var AgencyPassword = "root"
  var sql = 'SELECT * FROM agency WHERE AgencyName = ' + mysql.escape(AgencyName);
  db.query(sql, (err, result) => {
    if (err)
      res.send({ success: 0, statusCode: 500, message: "SELECT * FROM agency WHERE AgencyName Query Failed", error: err })
    else if (result.length > 0) {
      res.send({ success: 0, statusCode: 200, message: "AgencyEmail already exists" })
    }
    else {
      var sql = 'SELECT * FROM agency WHERE AgencyPhone = ' + mysql.escape(AgencyPhone);
      db.query(sql, (err, result) => {
        if (err)
          res.send({ success: 0, statusCode: 500, message: "SELECT * FROM agency WHERE AgencyPhone Query Failed", error: err })

        else if (result.length > 0) {
          res.send({ success: 0, statusCode: 200, message: "Phone Number already exists" })
        }
        else {
          bcrypt.hash(AgencyPassword, 10, function (err, hash) {
            sql = "INSERT INTO agency (AgencyName, AgencyEmail, AgencyPassword, AgencyPhone) VALUES (?)";
            var values = [AgencyName, AgencyEmail, hash, AgencyPhone];

            db.query(sql, [values], (err, result) => {
              if (err)
                res.send({ success: 0, statusCode: 500, message: "INSERT INTO agency (AgencyName, AgencyEmail, AgencyPassword, AgencyPhone) Query Failed", error: err })
              else {
                res.send({ success: 1, statusCode: 200, message: result })

              }
            })
          })
        }
      });
    }
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
  const UserId = req.body.UserId;
  const dob = req.body.dob;
  const address = req.body.address;
  const phone = req.body.phone;
  const password = req.body.password;

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
          bcrypt.hash(password, 10, function (err, hash) {
            db.query("UPDATE user SET UserName=?, UserEmail=?, UserPassword, UserDOB=?, UserAddress=?, UserPhone=? WHERE UserId=?",
              [username, email, hash, dob, address, phone, UserId],
              (err, result) => {
                if (err)
                  res.send({ success: 0, statusCode: 500, message: "Update INTO user  Query Failed", error: err })
                else {
                  res.send({ success: 1, statusCode: 200, message: "Update Sucesfully" })
                  // res.send(result)
                }
              });
          })
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

app.delete('/api/staffDelete/:id', (req, res) => {
  const id = req.body.id;
  const sql = 'DELETE FROM user WHERE UserId = ?';
  db.query(sql, [id], (err, result) => {
    if (err) throw err;
    if (result.affectedRows === 0) {
      res.sendStatus(404);
    } else {
      res.sendStatus(204);
    }
  });
});

app.post('/api/items', (req, res) => {
  const { name, email } = req.body;
  const sql = 'INSERT INTO user (name, email) VALUES (?, ?)';
  db.query(sql, [name, email], (err, result) => {
    if (err) throw err;
    const id = result.insertId;
    const newItem = { id, name, email };
    res.status(201).json(newItem);
  });
});

app.post("/api/addStaff", async (req, res) => {

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
            sql = "INSERT INTO user (UserName, UserEmail, UserPassword, UserDOB, UserAddress, UserPhone,IsStaff) VALUES (?)";
            var values = [username, email, hash, userDOB, userAddress, userPhone, 1];
            db.query(sql, [values], (err, result) => {
              if (err)
                res.send({ success: 0, statusCode: 500, message: "INSERT INTO user (UserName, UserEmail, UserPassword, UserDOB, UserAddress, UserPhone) Query Failed", error: err })
              else {
                res.send({ success: 1, statusCode: 200, message: "Add Staff Sucesfully" })
                // res.send(result)
              }
            })
          })
        }
      });
    }
  });
});


app.patch("/api/updateAgency", async (req, res) => {

  const agencyname = req.body.agencyname;
  const agencyemail = req.body.agencyemail;
  const AgencyId = req.body.AgencyId;
  const agencyphone = req.body.agencyphone;


  var sql = 'SELECT * FROM agency WHERE AgencyEmail = ' + mysql.escape(agencyemail);
  db.query(sql, (err, result) => {
    if (err)
      res.send({ success: 0, statusCode: 500, message: "SELECT * FROM agency WHERE AgencyEmail Query Failed", error: err })
    else if (result.length > 0) {
      res.send({ success: 0, statusCode: 200, message: "Email already exists" })
    }
    else {
      var sql = 'SELECT * FROM agency WHERE AgencyPhone = ' + mysql.escape(agencyphone);
      db.query(sql, (err, result) => {
        if (err)
          res.send({ success: 0, statusCode: 500, message: "SELECT * FROM agency WHERE AgencvyPhone Query Failed", error: err })

        else if (result.length > 0) {
          res.send({ success: 0, statusCode: 200, message: "Phone Number already exists" })
        }
        else {
          db.query("UPDATE agency SET AgencyName=?, AgencyEmail=?, AgencyPhone=? WHERE AgencyId=?",
            [agencyname, agencyemail, agencyphone, AgencyId],
            (err, result) => {
              if (err)
                res.send({ success: 0, statusCode: 500, message: "Update INTO agency  Query Failed", error: err })
              else {
                // res.send({ success: 1, statusCode: 200, message: "Update Sucesfully" })
                res.send(result)
              }
            });
        }
      });
    }
  });
});

app.delete('/api/agencyDelete/:id', (req, res) => {
  const id = req.body.id;
  const sql = 'DELETE FROM agency WHERE AgencyId = ?';
  db.query(sql, [id], (err, result) => {
    if (err) throw err;
    if (result.affectedRows === 0) {
      res.send({ success: 0, statusCode: 500, message: "Staff Not Found", error: err })
      // res.sendStatus(404);
    } else {
      res.send({ success: 1, statusCode: 200, message: "Delete Sucesfully" })
      // res.sendStatus(204);
    }
  });
});

app.post("/api/addAgency", async (req, res) => {

  const agencyname = req.body.name;
  const agencyemail = req.body.email;
  const agencyphone = req.body.phone;
  const password = req.body.password;

  var sql = 'SELECT * FROM agency WHERE AgencyEmail = ' + mysql.escape(agencyemail);
  db.query(sql, (err, result) => {
    if (err)
      res.send({ success: 0, statusCode: 500, message: "SELECT * FROM agency WHERE AgencyEmail Query Failed", error: err })
    else if (result.length > 0) {
      res.send({ success: 0, statusCode: 200, message: "Email already exists" })
    }
    else {
      var sql = 'SELECT * FROM agency WHERE AgencyPhone = ' + mysql.escape(agencyphone);
      db.query(sql, (err, result) => {
        if (err)
          res.send({ success: 0, statusCode: 500, message: "SELECT * FROM agency WHERE AgencyPhone Query Failed", error: err })

        else if (result.length > 0) {
          res.send({ success: 0, statusCode: 200, message: "Phone Number already exists" })
        }
        else {
          bcrypt.hash(password, 10, function (err, hash) {
            sql = "INSERT INTO agency (AgencyName, AgencyEmail, AgencyPhone,AgencyPassword ) VALUES (?)";
            var values = [agencyname, agencyemail, agencyphone, hash];
            db.query(sql, [values], (err, result) => {
              if (err)
                res.send({ success: 0, statusCode: 500, message: "INSERT INTO agency  Query Failed", error: err })
              else {
                res.send({ success: 1, statusCode: 200, message: "Add Agency Sucesfully" })
                // res.send(result)
              }
            })
          })
        }
      });
    }
  });
});

// app.patch("/api/updatePackage", async (req, res) => {

//   const packagename = req.body.packagename;
//   const adddate = req.body.adddate;
//   const packagedes = req.body.AgencyId;


//   var sql = 'SELECT * FROM pack WHERE AgencyEmail = ' + mysql.escape(agencyemail);
//   db.query(sql, (err, result) => {
//     if (err)
//       res.send({ success: 0, statusCode: 500, message: "SELECT * FROM agency WHERE AgencyEmail Query Failed", error: err })
//     else if (result.length > 0) {
//       res.send({ success: 0, statusCode: 200, message: "Email already exists" })
//     }
//     else {
//       var sql = 'SELECT * FROM agency WHERE AgencyPhone = ' + mysql.escape(agencyphone);
//       db.query(sql, (err, result) => {
//         if (err)
//           res.send({ success: 0, statusCode: 500, message: "SELECT * FROM agency WHERE AgencvyPhone Query Failed", error: err })

//         else if (result.length > 0) {
//           res.send({ success: 0, statusCode: 200, message: "Phone Number already exists" })
//         }
//         else {
//           db.query("UPDATE agency SET AgencyName=?, AgencyEmail=?, AgencyPhone=? WHERE AgencyId=?",
//             [agencyname, agencyemail, agencyphone, AgencyId],
//             (err, result) => {
//               if (err)
//                 res.send({ success: 0, statusCode: 500, message: "Update INTO agency  Query Failed", error: err })
//               else {
//                 // res.send({ success: 1, statusCode: 200, message: "Update Sucesfully" })
//                 res.send(result)
//               }
//             });
//         }
//       });
//     }
//   });
// });

app.delete('/api/packageDelete/:id', (req, res) => {
  const id = req.body.id;
  const sql = 'DELETE FROM package WHERE PackageId = ?';
  db.query(sql, [id], (err, result) => {
    if (err) throw err;
    if (result.affectedRows === 0) {
      res.send({ success: 0, statusCode: 500, message: "Package Not Found", error: err })
      // res.sendStatus(404);
    } else {
      res.send({ success: 1, statusCode: 200, message: "Delete Sucesfully" })
      // res.sendStatus(204);
    }
  });
});



app.post("/api/addPackage", async (req, res) => {

  const agencyname = req.body.name;
  const agencyemail = req.body.email;
  const agencyphone = req.body.phone;
  const password = req.body.password;

  var sql = 'SELECT * FROM agency WHERE AgencyEmail = ' + mysql.escape(agencyemail);
  db.query(sql, (err, result) => {
    if (err)
      res.send({ success: 0, statusCode: 500, message: "SELECT * FROM agency WHERE AgencyEmail Query Failed", error: err })
    else if (result.length > 0) {
      res.send({ success: 0, statusCode: 200, message: "Email already exists" })
    }
    else {
      var sql = 'SELECT * FROM agency WHERE AgencyPhone = ' + mysql.escape(agencyphone);
      db.query(sql, (err, result) => {
        if (err)
          res.send({ success: 0, statusCode: 500, message: "SELECT * FROM agency WHERE AgencyPhone Query Failed", error: err })

        else if (result.length > 0) {
          res.send({ success: 0, statusCode: 200, message: "Phone Number already exists" })
        }
        else {
          bcrypt.hash(password, 10, function (err, hash) {
            sql = "INSERT INTO agency (AgencyName, AgencyEmail, AgencyPhone,AgencyPassword ) VALUES (?)";
            var values = [agencyname, agencyemail, agencyphone, hash];
            db.query(sql, [values], (err, result) => {
              if (err)
                res.send({ success: 0, statusCode: 500, message: "INSERT INTO agency  Query Failed", error: err })
              else {
                res.send({ success: 1, statusCode: 200, message: "Add Agency Sucesfully" })
                // res.send(result)
              }
            })
          })
        }
      });
    }
  });
});

app.post("/api/searchstaff", (req, res) => {
  const username = req.body.username;
  db.query("SELECT * FROM user WHERE IsStaff AND UserName= " + mysql.escape(username), (err, result) => {
    if (err) {
      console.log(err)
    }
    res.send(result)
  });
});

app.get('/api/bookPackage', (req, res) => {
  // const { packageId, startDate, endDate } = req.body;
  var userid = Cookies.get('UserId');
  // userid=JSON.parse(userid);
  // console.log(id)
  // const userId = req.session.userId; // Assuming you're using sessions for authentication

  // Check if package is available for the selected dates
  // db.query('SELECT * FROM bookings WHERE package_id = ? AND ((start_date BETWEEN ? AND ?) OR (end_date BETWEEN ? AND ?))', [packageId, startDate, endDate, startDate, endDate], (err, results) => {
  //   if (err) {
  //     console.log(err);
  //     return res.status(500).send({ message: 'An error occurred while checking availability.' });
  //   }

  //   if (results.length > 0) {
  //     return res.status(400).send({ message: 'This package is not available for the selected dates.' });
  //   }
  //   // Insert booking into database
  //   db.query('INSERT INTO bookings (user_id, package_id, start_date, end_date, traveler_names, traveler_ages) VALUES (?, ?, ?, ?, ?, ?)', [userId, packageId, startDate, endDate, travelerNames, travelerAges], (err, result) => {
  //     if (err) {
  //       console.log(err);
  //       return res.status(500).send({ message: 'An error occurred while booking the package.' });
  //     }

  //     res.send({ message: 'Package booked successfully.' });
  //   });
  // });
  res.send(userid)
});

app.post('/api/showavailablepackage', (req, res) => {
  // res.send(req.body)
  db.query('SELECT * FROM package', (err, results) => {
    res.send(results)
  })
})


app.post('/api/packagedetails', (req, res) => {
  // res.send(req.body)
  var packageid = req.body.packageid;

  db.query('SELECT * FROM package Where PackageId=' + packageid, (err, results) => {
    res.send(results)
  })
})

app.post('/api/confirmbooking', (req, res) => {
  // res.send(req.body)
  var userid = req.body.userid;
  var paymentmethod = req.body.paymentmethod;
  var packageid = req.body.packageid;
  var startDate = req.body.bookdate;
  var noofadult = req.body.noofadult;
  var noofchild = req.body.noofchild;
  var additional = req.body.additional;
  var noofpackagedays = null;
  db.query('SELECT * FROM package Where PackageId=' + packageid, (err, results) => {
    noofpackagedays = results[0].PackageNoOfDays;
    var packageprice = results[0].PackagePrice;
    var totalAmount = (parseInt(noofadult) + parseInt(noofchild)) * packageprice
    var currentDate = new Date();
    startDate = new Date(startDate)
    noofpackagedays = noofpackagedays
    var endDate = new Date(startDate.setDate(startDate.getDate() + noofpackagedays));

    var insertValues = [currentDate, startDate, endDate, noofadult, noofadult, totalAmount, packageid, userid, paymentmethod, additional]
    db.query('INSERT INTO booking (BookingDate, StartDate, EndDate, NoOfAdult, NoOfChild, TotalAmount, packageId, userid, paymentMethod, additional) VALUES (?)', [insertValues], (error, response) => {
      if (error) {
        res.send({ "success": 0, "message": error })
      }
      else {
        res.send({ "success": 1, "bookingid": response.insertId })
      }
    })
  })

})


app.post('/api/user/update', (req, res) => {
  var userid = req.body.userid
  var username = req.body.username
  var email = req.body.email
  var phone = req.body.phone
  var address = req.body.address

  var sql = `UPDATE user SET UserName=?, UserEmail=?, UserAddress=?, UserPhone=? WHERE UserId = ?`
  var data = [
    username, email, address, phone, userid
  ]
  db.query(sql, data, (error, result) => {
    if (error)
      res.send({ "success": 0, "message": error });
    else {
      res.send({ "success": 1, "message": result })
    }
  })

})

app.post('/api/user/booking', (req, res) => {
  var userid = req.body.userid
  var sql = `SELECT * FROM booking WHERE userid=${userid}`;
  db.query(sql, (error, result) => {
    if (error)
      res.send({ "success": 0, "message": error })
    else {
      res.send({ "success": 1, "message": result })
      console.log("New Response", res.data)
      // res.send(result);
    }
  })
})
app.post('/api/booking', (req, res) => {
  var userid = req.body.userid
  var sql = `SELECT * FROM booking`;
  db.query(sql, (error, result) => {
    if (error)
      res.send({ "success": 0, "message": error })
    else {
      res.send({ "success": 1, "message": result })
    }
  })
})

app.post("/api/popularPackages", (req, res) => {
  db.query("SELECT * FROM booking", (err, result) => {
    var packageIdArray = [];
    result.forEach(el => {
      packageIdArray.push(el.packageId)
    })

    var freqPackageId = [];
    function mostFrequent(arr) {
      return arr.sort((a, b) =>
        arr.filter(v => v === a).length
        - arr.filter(v => v === b).length
      ).pop();

    }
    function removeElementFromArray(arr, val) {
      for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] === val) {
          arr.splice(i, 1);
        }
      }
      return arr;
    }

    for (var i = 0; i < 3; i++) {
      freqPackageId.push(mostFrequent(packageIdArray))
      packageIdArray = removeElementFromArray(packageIdArray, mostFrequent(packageIdArray))
    }


    res.send({ "success": 1, "message": freqPackageId })
  })
})







